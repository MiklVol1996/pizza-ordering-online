import { RootState } from "../../store"
import { Sort } from "../filter_sort/types"

export enum FetchStatuses {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error,'
}

export type Pizza = {
    id: number,
    imageUrl: string,
    title: string,
    types: Array<number>,
    sizes: Array<number>,
    price: number,
    category: number,
    rating: number,
}

export type InitialState = {
    pizzas: Array<Pizza>,
    status: FetchStatuses,
    searchValue: string,
}

export type SetSearchValue = {
    text: string,
}

export type FetchParams = {
    searchValue?: string,
}

export type OptionsAPI = {
    state: RootState,
}




