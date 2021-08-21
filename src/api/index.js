import axios from "axios";
import {setPizzas} from "../redux/actions/pizzas";

export const fetchPizzas = (category="", sortBy="") => (dispatch) => {
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

