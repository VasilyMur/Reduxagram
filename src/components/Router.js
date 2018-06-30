import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppConnect from './AppConnect';
import SingleConnect from './SingleConnect';
import NotFound from './NotFound';

import store from '../store';
import { Provider } from 'react-redux';


const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AppConnect} />
                    <Route path="/view/:postId" component={SingleConnect} />
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Router;