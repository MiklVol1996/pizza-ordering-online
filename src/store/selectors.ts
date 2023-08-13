import { RootState } from "./store"


export const giveCategoryIndex = (state: RootState) => {
    return state.categories.selectedCategoryIndex;
}

export const giveSelectedSort = (state: RootState) => {
    return state.categories.selectedSort;
}

export const giveCurrentPage = (state: RootState) => {
    return state.categories.currentPage;
}

export const giveTotalCountPages = (state: RootState) => {
    return state.categories.totalCount;
}

export const giveCartData = (state: RootState) => {
    return state.curt;
}

export const giveTotalPrice = (state: RootState) => {
    return state.curt.totalPrice;
}

export const givePizzasCount = (state: RootState) => {
    return state.curt.totalPizzaCount;
}

export const givePizzaTitleCount = (title: string) => (state: RootState) => {
    let count = 0;
    state.curt.pizzas.forEach(position => {
        if (position[0].title === title) {
            count += position[1];
        }
    })
    return count;
}

export const giveFetchedPizzas = (state: RootState) => {
    return state.pizzas.pizzas;
}

export const giveFetchStatus = (state: RootState) => {
    return state.pizzas.status;
}





