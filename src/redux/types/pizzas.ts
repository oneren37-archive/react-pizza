import {Pizza} from "../../types";


export interface PizzasState {
    items: Pizza.IPizza[],
    isLoaded: boolean
}

export type SetPizzasAction = {
    type: 'SET_PIZZAS',
    payload: Pizza.IPizza[]
}

export type SetLoadedAction = {
    type: 'SET_LOADED',
    payload: boolean
}

export type PizzasAction = SetPizzasAction | SetLoadedAction
