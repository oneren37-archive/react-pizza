import {Pizza} from "../../types";
import {SetPizzasAction} from "../types";

export const setPizzas = (items: Pizza.IPizza[]): SetPizzasAction => ({
    type: 'SET_PIZZAS',
    payload: items
})
