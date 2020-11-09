import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import LandingPage from './Pages/LandingPage'

export default function Router() {


    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
            </Switch>
        </BrowserRouter>
    )
}
