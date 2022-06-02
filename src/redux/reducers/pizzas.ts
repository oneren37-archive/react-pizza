import {PizzasAction, PizzasState} from "../types";


const initialState: PizzasState = {
    items: [],
    isLoaded: false
}

const pizzas = (state: PizzasState = initialState, action: PizzasAction) => {
    if (action.type === 'SET_PIZZAS'){
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    if (action.type === "SET_LOADED"){
        return {
            ...state,
            isLoaded: action.payload
        }
    }
    return state
}

export default pizzas
