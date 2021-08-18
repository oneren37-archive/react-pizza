import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/Pizza-block";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {catNames, sortOptions} from "../consts";

const Home = () => {
    const items = useSelector(({pizzas}) => pizzas.items)

    const dispatch = useDispatch()
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return(
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    categories={catNames}
                />
                <Sort sortOptions={sortOptions}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(pizza => (<PizzaBlock {...pizza} key={pizza.id}/>))}
            </div>
        </div>
    )
}

export default Home
