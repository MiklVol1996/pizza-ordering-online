export type PositionParams = [
    {
        title: string,
        imgURL: string,
        price: number,
        type: string,
        size: number,
    }, number
]

export type InitialState = {
    pizzas: Array<PositionParams>,
    totalPrice: number,
    totalPizzaCount: number,
    countForRender: number,
}

export type PositionForAdding = {
    title: string,
    imgURL: string,
    price: number
    type: string,
    size: number,
}

export type DeletePosition = {
    title: string,
    price: number,
    pizzaCountInPosition: number,
    size: number,
    type: string,
}

export type ChangePositionCount = {
    title: string,
    price: number,
    type: string,
    size: number,
    change: string,
}

