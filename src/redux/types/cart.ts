import {Pizza} from "../../types";

type PizzaKey = {
    pizzaId: Pizza.id,
    type: Pizza.typeID,
    size: Pizza.sizeId,
}

export interface CartState {
    items: {
        [pizzaId: Pizza.id]: [
            pizzaData: {
                type: Pizza.typeID,
                size: Pizza.sizeId,
                imageUrl: Pizza.imageUrl,
                name: Pizza.name,
                price: Pizza.price
            },
            count: number
        ][]
    },
    totalPrice: number,
    totalCount: number
}

export type AddToCartAction = {
    type: 'ADD_TO_CART',
    payload: {
        imageUrl: Pizza.imageUrl,
        name: Pizza.name,
        price: Pizza.price,
        pizzaId: Pizza.id,
        type: Pizza.typeID,
        size: Pizza.sizeId
    }
}

export type RemoveCartItemAction = {
    type: 'REMOVE_CART_ITEM',
    payload: {
        pizzaId: Pizza.id,
        type: Pizza.typeID,
        size: Pizza.sizeId,
        count: number // TODO оторвать
        price: Pizza.price,
    }
}

export type IncrementCartItemAction = {
    type: 'INCREMENT_CART_ITEM', payload: PizzaKey
}

export type DecrementCartItemAction = {
    type: 'DECREMENT_CART_ITEM', payload: PizzaKey
}

export type ClearCartAction = {
    type: 'CLEAR_CART'
}

export type CartAction =
    AddToCartAction |
    RemoveCartItemAction |
    IncrementCartItemAction |
    DecrementCartItemAction |
    ClearCartAction
