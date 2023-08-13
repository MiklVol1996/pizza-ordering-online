import React, { RefObject, useEffect, useRef, useState } from 'react';
import arrow from '../../assets/img/arrow-sorts.svg';
import { Sort as SortType } from '../../store/slices/filter_sort/types';
import { Props } from './types';

export const sorts = [
    { name: 'rating', sort: 'популярности ↑' },
    { name: 'rating', sort: 'популярности ↓' },
    { name: 'price', sort: 'цене ↑' },
    { name: 'price', sort: 'цене ↓' },
    { name: 'title', sort: 'алфавиту ↑' },
    { name: 'title', sort: 'алфавиту ↓' }];

const Sort: React.FC<Props> = React.memo(({ selectedSort, onSortByClick }) => {

    const popUpRef = useRef() as RefObject<HTMLDivElement>;
    let [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (!e.composedPath().includes(popUpRef.current as HTMLDivElement)) {
                setIsPopupVisible(false);
            }
        }
        document.body.addEventListener('click', onClick);

        return () => document.body.removeEventListener('click', onClick);
    }, [])

    const onSortClick = (sortVar: string) => {
        const objForAction = sorts.find(sort => sort.sort === sortVar);
        onSortByClick(objForAction as SortType);
        setIsPopupVisible(false);
    }

    return (
        <div ref={popUpRef} className="sort">
            <div className="sort__label">
                <img src={arrow} />
                <b>Сортировка по:</b>
                <span onClick={() => setIsPopupVisible(!isPopupVisible)}>{selectedSort.sort}</span>
            </div>
            {isPopupVisible && <div className="sort__popup">
                <ul>
                    {
                        sorts.map((sortVar, i) => {
                            return (
                                <li key={sortVar.sort} onClick={() => onSortClick(sortVar.sort)}
                                    className={sortVar.sort === selectedSort.sort ? 'active' : ''}>{sorts[i].sort}</li>
                            )
                        })
                    }
                </ul>
            </div>}

        </div>
    )
})

export default Sort;