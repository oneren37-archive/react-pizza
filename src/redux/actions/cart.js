export const addToCart = (payload) => {
    return{
        type: "ADD_TO_CART",
        payload
    }
}

export const removeCartItem = (payload) => {
    return {
        type: "REMOVE_CART_ITEM",
        payload
    }
}

export const incrementCartItem = (payload) => {
    return {
        type: "INCREMENT_CART_ITEM",
        payload
    }
}

export const decrementCartItem = (payload) => {
    return {
        type: "DECREMENT_CART_ITEM",
        payload
    }
}

export const clearCart = (payload) => {
    return {type: "CLEAR_CART", payload}
}
