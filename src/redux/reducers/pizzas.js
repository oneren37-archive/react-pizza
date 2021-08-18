import axios from "axios";
import setPizzas from "../actions/pizzas";

const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    // if (action.type === "FETCH_PIZZAS"){
    //     axios.get('http://localhost:3005/pizzas').then(({data}) => {
    //         dispatch(setPizzas(data.pizzas))
    //     });
    // }
    if (action.type === 'SET_PIZZAS'){
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state
}

export default pizzas
