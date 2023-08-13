import React from 'react';
import classes from './error.module.scss';

const FetchError: React.FC = () => {

    return (
        <div className={classes.wrap}>
            <h2>Ошибка загрузки 😕</h2>
            <p>
                К сожалению не удалось получить пиццы.<br />
                Попробуйте повторить запрос позже.
            </p>
        </div>
    )
}

export default FetchError;