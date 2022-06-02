import axios from "axios";
import {setPizzas} from "../redux/actions/pizzas";
import {Dispatch} from "redux";
import {Category} from "../types";

export const fetchPizzas = (category: Category.id, sortBy="") => (dispatch: Dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios.get('http://localhost:3005/pizzas', {
        params: {
            category: category,
            _sort: sortBy,
            _order: 'desc'
        }
    }).then(({data}) => {
        dispatch(setPizzas(data))
    });
}

