import { PositionParams } from "../store/slices/curt/types";

export const getDataFromLS = (): CurtData => {

    let dataString = localStorage.getItem('curt-data');
    let dataObj;
    if (dataString){
        dataObj = JSON.parse(dataString);
    }
    
    return dataObj ? dataObj : {
        pizzas: [], 
        countForRender: 0, 
        totalPizzaCount: 0, 
        totalPrice: 0
    };
}

type CurtData = {
    pizzas: Array<PositionParams>, 
    countForRender: number, 
    totalPizzaCount: number, 
    totalPrice: number,
}