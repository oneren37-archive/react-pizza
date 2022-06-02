import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {addToCart} from "../redux/actions/cart";
import {catNames, sortOptions} from "../consts";
import {Categories, Sort, PizzaBlock, LoadingPizzaBlock} from "../components";
import {fetchPizzas} from "../api";
import {Category, Pizza, SortType} from "../types";
import {RootState} from "../redux/reducers";

const Home: React.FC = () => {
    const items: Pizza.IPizza[] = useSelector(({pizzas}: RootState) => pizzas.items)
    const isLoaded = useSelector(({pizzas}: RootState) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}: RootState) => filters)

    const dispatch = useDispatch()
    const onSelectCategory = React.useCallback((id: Category.id) => {
        dispatch(setCategory(id))
    }, [])

    const onSelectSortBy = React.useCallback((type: SortType) => {
        dispatch(setSortBy(type))
    }, [])

    const onAddToCart = React.useCallback((data: any) => {
        dispatch(addToCart(data))
    }, [])

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    categories={catNames}
                />
                <Sort
                    onSelectSortBy={onSelectSortBy}
                    sortOptions={sortOptions}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map(pizza => (<PizzaBlock {...pizza} onAddToCart={onAddToCart} key={pizza.pizzaId}/>))
                    : Array(9).fill(0).map((_, index) => (<LoadingPizzaBlock key={index}/>))
                }
            </div>
        </div>
    )
}

export default Home
