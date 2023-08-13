import React, { useEffect, useRef } from 'react';
import Categories from '../../components/categories/Categories';
import Sort, { sorts } from '../../components/sort/Sort';
import PizzaSkeleton from '../../components/pizza_skeleton/PizzaSkeleton';
import Pizza from '../../components/pizza_item/Pizza';
import {
    giveCategoryIndex, giveCurrentPage, giveSelectedSort,
    giveTotalCountPages, giveFetchedPizzas, giveFetchStatus
} from '../../store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/slices/filter_sort/filter_sort';
import { Sort as SortType } from '../../store/slices/filter_sort/types';
import Pagination from '../../pagination/Pagination';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { fetchPizzas } from '../../store/slices/pizzas/pizzas';
import FetchError from '../../components/fetch_error/FetchError';
import { FetchStatuses } from '../../store/slices/pizzas/types';
import { AppDispatch } from '../../store/store';

const Home: React.FC = () => {

    let isRequestNeed = useRef(false);
    let isFirstRender = useRef(true);

    const selectedCategory = useSelector(giveCategoryIndex);
    const selectedSort = useSelector(giveSelectedSort);
    const currentPage = useSelector(giveCurrentPage);
    const totalCountPages = useSelector(giveTotalCountPages);
    const status = useSelector(giveFetchStatus);
    const pizzaz = useSelector(giveFetchedPizzas);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isFirstRender.current) {
            const queryString = qs.stringify({
                category: selectedCategory,
                sortBy: selectedSort.name,
                page: currentPage,
                order: selectedSort.sort.includes('↑') ? 'asc' : 'desc',
            });
            navigate(`?${queryString}`);
        }
        isFirstRender.current = false;
    }, [selectedCategory, selectedSort, currentPage]);


    useEffect(() => {
        if (!window.location.search) {
            isRequestNeed.current = true;
            return;
        }
        const filtersObj = qs.parse(window.location.search.substring(1));
        const direction = filtersObj.order === 'asc' ? '↑' : '↓';
        const sortObj = sorts.find(sort => {
            if (sort.name === filtersObj.sortBy && sort.sort.includes(direction)) {
                return true;
            }
            return false;
        })
        dispatch(actions.setAllFilters({
            currentPage: Number(filtersObj.page),
            selectedCategoryIndex: Number(filtersObj.category),
            selectedSort: sortObj as SortType
        }))
    }, []);


    useEffect(() => {
        if (isRequestNeed.current) {
            dispatch(fetchPizzas({}));
        }
        isRequestNeed.current = true;
    }, [selectedCategory, selectedSort, currentPage])


    const onCategoryClick = (categoryIndex: number) => {
        dispatch(actions.setSelectedCategoryIndex({ index: categoryIndex }));
    }

    const onSortByClick = (obj: SortType) => {
        dispatch(actions.setSelectedSort({ sort: obj }));
    }

    return (
        <>
            <div className="content__top">
                <Categories selectedCategory={selectedCategory} onCategoryClick={onCategoryClick} />
                <Sort selectedSort={selectedSort} onSortByClick={onSortByClick} />
            </div>
            {pizzaz.length > 0 ? <h2 className="content__title">Все пиццы</h2> : ''}
            <div className="content__items">
                {
                    status === FetchStatuses.ERROR ? <FetchError /> :
                        status === FetchStatuses.LOADING ? [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />)
                            : pizzaz.length ? pizzaz.map(pizza => {
                                return (
                                    <Pizza key={pizza.id} {...pizza} />
                                )
                            }) : ''
                }
            </div>
            <Pagination pagesCount={totalCountPages} currentPage={currentPage} />
        </>
    )
}

export default Home;


