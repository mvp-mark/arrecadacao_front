import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Arrecadation from './pages/Arrecadation';

const Routes = () => {
    return(
        <BrowserRouter>
        <Route component={CreatePoint} exact path="/"/>
        <Route component={Arrecadation} path="/arrecadation/"/>
        {/* <Route component={Home} path="/" exact/> */}
        </BrowserRouter>
    )
}

export default Routes
