import React from 'react';
import classes from './notFound.module.scss';

const NotFound: React.FC = () => {
    return (
        <div className={classes.wrap}>
            <h1>
                <span>😕</span>
                <br />
                Такой страницы нет
            </h1>
        </div>
    )
}

export default NotFound;