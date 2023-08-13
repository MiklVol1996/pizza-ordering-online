import React from 'react';
import { PositionParams } from '../../store/slices/curt/types';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/slices/curt/curt';


type Props = {
    data: PositionParams,
}

const CartPosition: React.FC<Props> = React.memo(({ data }) => {

    const dispatch = useDispatch();

    const basicObjForDispatch = {
        title: data[0].title,
        price: data[0].price,
        size: data[0].size,
        type: data[0].type,
    }

    const onPositionDelete = () => {
        dispatch(actions.deletePosition({
            ...basicObjForDispatch,
            pizzaCountInPosition: data[1]
        }));
    }

    const onChangePosition = (str: string) => {
        if (str === '+') {
            dispatch(actions.changePositionCount({
                change: '+',
                ...basicObjForDispatch,
            }))
        } else {
            dispatch(actions.changePositionCount({
                change: '-',
                ...basicObjForDispatch,
            }))
        }
    }

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img className="pizza-block__image" src={data[0].imgURL} alt="Pizza" />
            </div>
            <div className="cart__item-info">
                <h3>{data[0].title}</h3>
                <p>{`${data[0].type} тесто, ${data[0].size} см.`}</p>
            </div>
            <div className="cart__item-count">
                <div onClick={() => onChangePosition('-')} className="button button--outline button--circle cart__item-count-minus">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"></path>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                    </svg>

                </div>
                <b>{data[1]}</b>
                <div onClick={() => onChangePosition('+')} className="button button--outline button--circle cart__item-count-plus">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"></path>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                    </svg>

                </div>
            </div>
            <div className="cart__item-price">
                <b>{`${data[0].price * data[1]} ₽`}</b>
            </div>
            <div onClick={onPositionDelete} className="cart__item-remove">
                <div className="button button--outline button--circle">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"></path>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"></path>
                    </svg>

                </div>
            </div>
        </div>
    )
})

export default CartPosition;