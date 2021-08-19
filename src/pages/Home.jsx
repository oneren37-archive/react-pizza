import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {catNames, sortOptions} from "../consts";
import {Categories, Sort, PizzaBlock, LoadingPizzaBlock} from "../components";
import {fetchPizzas} from "../api";

const Home = () => {
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    const dispatch = useDispatch()
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortBy = React.useCallback((index) => {
        dispatch(setSortBy(index))
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
                    ? items.map(pizza => (<PizzaBlock {...pizza} key={pizza.id}/>))
                    : Array(9).fill(0).map((_, index) => (<LoadingPizzaBlock key={index}/>))
                }
            </div>
        </div>
    )
}

export default Home
