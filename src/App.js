import React from "react";
import {Route} from "react-router-dom";

import {Header} from "./components";
import {Home, Cart} from "./pages";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

function App() {

    const dispatch = useDispatch()

    // React.useEffect(() => {
    //     axios.get('http://localhost:3005/pizzas').then(({data}) => {
    //         dispatch(setPizzas(data))
    //     });
    // }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' component={Home} />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    );
}



export default App;
