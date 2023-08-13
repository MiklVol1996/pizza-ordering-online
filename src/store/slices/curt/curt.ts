import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { ChangePositionCount, DeletePosition, InitialState, PositionForAdding } from "./types";
import { getDataFromLS } from "../../../utils/getDataFromLocaleStorage";


const initialState: InitialState = getDataFromLS();
  

export const curt_slice = createSlice({
    name: 'curt',
    initialState,
    reducers: {
        addPosition(state, action: PayloadAction<PositionForAdding>) {
            if (!state.pizzas.length) {
                state.pizzas.push([action.payload, 1]);
                state.countForRender += 1;
            } else {
                let isAded = false;
                out: for (let item of state.pizzas) {
                    for (let key in item[0]) {
                        if (item[0][key as keyof PositionForAdding] !== action.payload[key as keyof PositionForAdding]) {
                            continue out;
                        }
                    }
                    item[1] += 1;
                    isAded = true;
                    break;
                }
                if (!isAded) {
                    state.pizzas.push([action.payload, 1]);
                    state.countForRender += 1;
                }
            }
            state.totalPrice += action.payload.price;
            state.totalPizzaCount += 1;
        },
        deletePosition(state, action: PayloadAction<DeletePosition>) {
            let indexToDelete = null;
            state.pizzas.forEach((position, i) => {
                if (action.payload.title === position[0].title && action.payload.size === position[0].size && action.payload.type === position[0].type) {
                    indexToDelete = i;
                }
            });
            state.pizzas.splice((indexToDelete as unknown as number), 1);
            state.countForRender -= 1;
            state.totalPrice -= action.payload.price * action.payload.pizzaCountInPosition;
            state.totalPizzaCount -= action.payload.pizzaCountInPosition;
        },
        clearCart(state) {
            state.countForRender = 0;
            state.pizzas = [];
            state.totalPizzaCount = 0;
            state.totalPrice = 0;
        },
        changePositionCount(state, action: PayloadAction<ChangePositionCount>) {
            let indexToChange = null;
            const position = state.pizzas.find((position, i) => {
                if (position[0].title === action.payload.title && position[0].type === action.payload.type && position[0].size === action.payload.size) {
                    indexToChange = i;
                    return true;
                }
            })
            if(position){
                if (action.payload.change === '+') {
                    position[1] += 1;
                    state.totalPizzaCount += 1;
                    state.totalPrice += action.payload.price;
                } else {
                    position[1] -= 1;
                    state.totalPizzaCount -= 1;
                    state.totalPrice -= action.payload.price;
                    if (position[1] === 0) {
                        state.pizzas.splice((indexToChange as unknown as number), 1);
                        state.countForRender -= 1;
                    }
                }
            }
        },
    }
})

export const { actions } = curt_slice;
export default curt_slice.reducer;

