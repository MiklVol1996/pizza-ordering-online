import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { InitialState, SetCategoryAction, SetFilters, SetPageAction, SetSortAction } from "./types";


export const initialState: InitialState = {
    selectedCategoryIndex: 0,
    selectedSort: {name: 'rating', sort: 'популярности ↑'},
    currentPage: 1,
    totalCount: 3,
}

export const filter_sort_slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelectedCategoryIndex: (state, action: PayloadAction<SetCategoryAction>) => {
            state.selectedCategoryIndex = action.payload.index;
        },
        setSelectedSort: (state, action: PayloadAction<SetSortAction>) => {
            state.selectedSort = action.payload.sort;
        },
        setCurrentPage: (state, action: PayloadAction<SetPageAction>) => {
            state.currentPage = action.payload.currentPage;
        }, 
        setAllFilters: (state, action: PayloadAction<SetFilters>) => {
            state.currentPage = action.payload.currentPage;
            state.selectedCategoryIndex = action.payload.selectedCategoryIndex;
            state.selectedSort = action.payload.selectedSort;
        },
    }
})

export const { actions } = filter_sort_slice;
export default filter_sort_slice.reducer;

