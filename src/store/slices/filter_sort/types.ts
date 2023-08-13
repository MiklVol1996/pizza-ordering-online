export type Sort = {
    name: string,
    sort: string,
}

export type InitialState = {
    selectedCategoryIndex: number,
    selectedSort: Sort,
    currentPage: number,
    totalCount: number,
}

export type SetCategoryAction = {
    index: number,
}

export type SetSortAction = {
    sort: Sort,
}

export type SetPageAction = {
    currentPage: number,
}

export type SetFilters = {
    selectedCategoryIndex: number,
    selectedSort: Sort,
    currentPage: number,
}
