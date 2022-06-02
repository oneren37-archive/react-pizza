import {FiltersAction, FiltersState} from "../types";


const initialState: FiltersState = {
    category: null,
    sortBy: 'popular'
}

const filters = (state = initialState, action: FiltersAction) => {
    if (action.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy: action.payload
        }
    }
    if (action.type === 'SET_CATEGORY'){
        return {
            ...state,
            category: action.payload
        }
    }
    return state
}

export default filters
