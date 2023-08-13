import React from 'react';
import empty from '../../assets/img/empty-cart.png';
import { NavLink } from 'react-router-dom';

const EmptyCart: React.FC = () => {

    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>Корзина пустая 😕</h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={empty} alt="Empty cart" />
                <NavLink to='/pizza-ordering-online'>
                    <div className="button button--black">
                        <span>Вернуться назад</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default EmptyCart;