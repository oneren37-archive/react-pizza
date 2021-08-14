import React from "react";
import axios from 'axios';

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/Pizza-block";

function App() {

    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {setPizzas(data.pizzas);});
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            categories={[
                                "Вегетарианские",
                                "Гриль",
                                "Острые",
                                "Закрытые"
                            ]}
                        />
                        <Sort
                            sortOptions={[
                                "популярности",
                                "цене",
                                "алфавиту"
                            ]}
                        />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map(pizza => (<PizzaBlock {...pizza} key={pizza.id}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
