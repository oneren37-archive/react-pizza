import {combineReducers} from "redux";

import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'
import {CartState, FiltersState, PizzasState} from "../types";

export const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

export type RootState = {
    cart: CartState,
    filters: FiltersState,
    pizzas: PizzasState
}
