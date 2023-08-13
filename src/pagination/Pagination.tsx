import React from 'react';
import { Props } from './types';
import classes from './pagination.module.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../store/slices/filter_sort/filter_sort';


const Pagination: React.FC<Props> = React.memo(({ pagesCount, currentPage }) => {

    const dispatch = useDispatch();

    const onPageClick = (i: number) => {
        if (i + 1 === currentPage) {
            return
        }
        dispatch(actions.setCurrentPage({ currentPage: i + 1 }));
    }

    const onSwitchClick = (direction: string) => {
        switch (direction) {
            case '-': {
                if (currentPage === 1) {
                    return;
                }
                dispatch(actions.setCurrentPage({ currentPage: currentPage - 1 }));
                break;
            }
            case '+': {
                if (currentPage === 3) {
                    return;
                }
                dispatch(actions.setCurrentPage({ currentPage: currentPage + 1 }));
                break;
            }
        }
    }

    return (
        <div className={classes.wrap}>
            <svg onClick={() => onSwitchClick('-')} viewBox="-2 -2 28 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18M6 12L11 7M6 12L11 17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>        {
                [...new Array(pagesCount)].map((_, i) => {
                    return (
                        <span key={i}
                            className={currentPage === (i + 1) ? classes.active : ''}
                            onClick={() => onPageClick(i)}>{i + 1}</span>
                    )
                })
            }
            <svg onClick={() => onSwitchClick('+')} viewBox="-2 -2 28 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
})

export default Pagination;