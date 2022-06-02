import {
    AddToCartAction,
    ClearCartAction,
    DecrementCartItemAction,
    IncrementCartItemAction,
    RemoveCartItemAction
} from "../types";

export const addToCart = (payload: any): AddToCartAction => {
    return {
        type: "ADD_TO_CART",
        payload
    }
}

export const removeCartItem = (payload: any): RemoveCartItemAction => {
    return {
        type: "REMOVE_CART_ITEM",
        payload
    }
}

export const incrementCartItem = (payload: any): IncrementCartItemAction => {
    return {
        type: "INCREMENT_CART_ITEM",
        payload
    }
}

export const decrementCartItem = (payload: any): DecrementCartItemAction => {
    return {
        type: "DECREMENT_CART_ITEM",
        payload
    }
}

export const clearCart = (): ClearCartAction => {
    return {
        type: "CLEAR_CART"
    }
}
