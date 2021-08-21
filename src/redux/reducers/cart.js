const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {

    if (action.type === "ADD_TO_CART"){
        const {imageUrl, name, price, pizzaId, type, size} = action.payload

        if (state.items[pizzaId]){

            const samePizzaInCartIndex = state.items[pizzaId].findIndex((cartItem) => (
                cartItem[0].size === size &&
                cartItem[0].type === type
            ))
            if (samePizzaInCartIndex !== -1){
                const samePizzaInCartCount = state.items[pizzaId][samePizzaInCartIndex][1]
                state.items[pizzaId][samePizzaInCartIndex] = [{type, size, imageUrl, name, price}, samePizzaInCartCount+1]
            }
            else {
                state.items[pizzaId].push([{type, size, imageUrl, name, price}, 1])
            }



            return {
                ...state,
                items: {
                    ...state.items,
                    [pizzaId]: [...state.items[pizzaId]]
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + price
            }
        }
        else {
            return {
                ...state,
                items: {
                    ...state.items,
                    [pizzaId]: [[{type, size, imageUrl, name, price}, 1]]
                },
                totalCount: state.totalCount + 1 ,
                totalPrice: state.totalPrice + price
            }
        }


    }
    if (action.type === "REMOVE_CART_ITEM"){
        const {pizzaId, type, size, count, price} = action.payload
        const newItems = {...state.items}

        if (newItems[parseInt(pizzaId)] && newItems[parseInt(pizzaId)].length === 1){ delete newItems[pizzaId] }
        else if (newItems[parseInt(pizzaId)]){
            const elementToDeleteIndex = newItems[pizzaId].findIndex(e => (
                e[0].type === type &&
                e[0].size === size
            ))
            delete newItems[pizzaId][elementToDeleteIndex]
        }
        return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - price*count,
            totalCount: state.totalCount - count
        }
    }
    if (action.type === "INCREMENT_CART_ITEM") {
        const {pizzaId, type, size} = action.payload
        const cartItem = state.items[pizzaId].find(el => el[0].type === type && el[0].size === size)
        cartItem[1]+=1
        const price = cartItem[0].price
        const totalCount = state.totalCount + 1
        const totalPrice = state.totalPrice + price

        return {
            ...state,
            items: {...state.items},
            totalCount: totalCount,
            totalPrice: totalPrice
        }
    }
    if (action.type === "DECREMENT_CART_ITEM"){
        const {pizzaId, type, size} = action.payload
        const cartItem = state.items[pizzaId].find(el => el[0].type === type && el[0].size === size)
        let totalCount = state.totalCount
        let totalPrice = state.totalPrice

        if (cartItem[1] > 1){
            cartItem[1] -= 1
            const price = cartItem[0].price
            totalCount -= 1
            totalPrice -= price
        }

        return {
            ...state,
            items: {...state.items},
            totalCount: totalCount,
            totalPrice: totalPrice
        }
    }
    if (action.type === "CLEAR_CART"){
        return initialState
    }
    return state
}

export default cart
