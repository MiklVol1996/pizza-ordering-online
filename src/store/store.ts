import { configureStore } from '@reduxjs/toolkit';
import  categoriesSlice  from './slices/filter_sort/filter_sort';
import curtSlice from './slices/curt/curt';
import  pizzasSlice  from './slices/pizzas/pizzas';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    pizzas: pizzasSlice,
    curt: curtSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;