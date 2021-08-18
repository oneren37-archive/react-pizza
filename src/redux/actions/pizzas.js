export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})

export const fetchPizzas = (payload) => ({
    type: 'FETCH_PIZZAS',
    payload
})

// export const fetchPizzas = () => (dispatch) => {
//
// }
