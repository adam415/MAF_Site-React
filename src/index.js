import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import Articles from './articles';
import Presenter from './components/Presenter';

let routes = [];
Articles.forEach(article => routes.push(
    <Route path={article.link} exact={article.requireExact}
        component={() => <Presenter
            header={article.header}
            current={article.link}
            component={article.component}
        />}
    />
));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {routes}
        </Switch>
    </BrowserRouter>,

    document.getElementById('content')
);

module.hot.accept(); // hot reloading for dev