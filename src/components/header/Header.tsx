import React, { RefObject, useRef, useState, useEffect } from "react"
import pizzaLogo from '../../assets/img/pizza-logo.svg';
import { NavLink } from 'react-router-dom';
import curt from '../../assets/img/curt.svg';
import { useDispatch, useSelector } from 'react-redux';
import { givePizzasCount, giveTotalPrice, giveCartData } from "../../store/selectors";
import classes from './header.module.scss';
import search from '../../assets/img/search.svg';
import close from '../../assets/img/inputClose.svg';
import { useDebounce } from "../../hooks/useDebounce";
import { actions, fetchPizzas } from "../../store/slices/pizzas/pizzas";
import { AppDispatch } from "../../store/store";


const Header: React.FC = () => {

    let [searchValue, setSearchValue] = useState('');
    let isFirstRender = useRef(true);
    let inputRef = useRef() as RefObject<HTMLInputElement>;
    const totalPrice = useSelector(giveTotalPrice);
    const pizzasCount = useSelector(givePizzasCount);
    const curtData = useSelector(giveCartData);
    const dispatch: AppDispatch = useDispatch();

    const debouncedSearchValue = useDebounce(searchValue, 300);

    useEffect(() => {
        localStorage.setItem('curt-data', JSON.stringify(curtData));
    }, [curtData]);

    useEffect(() => {
        if(!isFirstRender.current){
            dispatch(actions.setSearchValue({text: searchValue}));
            dispatch(fetchPizzas({}));    
        }
        isFirstRender.current = false;
    }, [debouncedSearchValue]);

    const onInputCloseClick = () => {
        setSearchValue('');
        dispatch(actions.setSearchValue({text: ''}));
        inputRef.current?.focus();
    }

    return (
        <div className="header">
            <div className="container">
                <NavLink to='/pizza-ordering-online'>
                    <div className="header__logo">
                        <img width="38" src={pizzaLogo} alt="Pizza logo" />
                        <div className="navLinkWrapper">
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </NavLink>
                <div className={classes.input}>
                    <img src={search} className={classes.search} />
                    {searchValue && <img src={close} className={classes.close} onClick={onInputCloseClick} />}
                    <input ref={inputRef}
                        placeholder='Введите название пиццы...' value={searchValue} autoFocus={true}
                        onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <div className="header__cart">
                    <NavLink to='/cart'>
                        <div className="button button--cart">
                            <span>{totalPrice} ₽</span>
                            <div className="button__delimiter"></div>
                            <img src={curt} />
                            <span>{pizzasCount}</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;

