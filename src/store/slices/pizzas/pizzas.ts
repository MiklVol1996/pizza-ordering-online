import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchParams, FetchStatuses, InitialState, OptionsAPI, Pizza, SetSearchValue } from "./types";
import axios from 'axios';

const initialState: InitialState = {
    pizzas: [],
    status: FetchStatuses.LOADING,
    searchValue: '',
}

export const fetchPizzas = createAsyncThunk<Array<Pizza>, FetchParams, OptionsAPI>('pizzas/fetchStatus',
    async ({ searchValue }, { getState }) => {
        const state = getState();
        const { selectedCategoryIndex, selectedSort, currentPage } = state.categories
        const category = selectedCategoryIndex > 0 ? `category=${selectedCategoryIndex}` : '';
        const sortBy = `sortBy=${selectedSort.name}`;
        const order = selectedSort.sort.includes('↑') ? 'order=asc' : 'order=desc';
        const page = `page=${currentPage}&limit=4`;
        const search = searchValue ? `search=${searchValue}` : `search=${state.pizzas.searchValue}`;
        const { data } = await axios.get(`https://64c79208a1fe0128fbd4f5b4.mockapi.io/items?${category}&${sortBy}&${order}&${page}&${search}`);
        return data;
    }
)

export const pizzas_slice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<SetSearchValue>) {
            state.searchValue = action.payload.text;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.pizzas = [];
            state.status = FetchStatuses.LOADING;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = FetchStatuses.SUCCESS;
            state.pizzas = action.payload;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.pizzas = [];
            state.status = FetchStatuses.ERROR;
        });
    }
})

export const { actions } = pizzas_slice;
export default pizzas_slice.reducer;

