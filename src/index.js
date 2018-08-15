import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import FootBar from './components/FootBar/FootBar';

import HomeArticle from './components/HomeArticle/HomeArticle';
//
//

import './index.css';

const Links = [
    { header: "Welcome MAF",    nav: "Home",    link: "/",       requireExact: true,     /*component: typeof HomeArticle*/ },
    { header: "MAF Table",      nav: "Table",   link: "/table",  requireExact: false,    /*component: typeof HomeArticle*/ },
    { header: "MAF Form",       nav: "Form",    link: "/form",   requireExact: false,    /*component: typeof HomeArticle*/ },
    { header: "About MAF",      nav: "About",   link: "/about",  requireExact: false,    /*component: typeof HomeArticle*/ }
];

ReactDOM.render(
    <Router>
        <section>
            <Switch>
                <Route path="/">
                    <section>
                        <Header title="Welcome MAF"/>
                        <NavigationBar links={Links} current="/"/>
                        <HomeArticle/>
                    </section>
                </Route>

                <Route path="/Table">
                    <section>
                        <Header title="MAF Table"/>
                        <NavigationBar links={Links} current="/table"/>
                        <HomeArticle/>
                    </section>
                </Route>

                <Route path="/Form">
                    <section>
                        <Header title="MAF Form"/>
                        <NavigationBar links={Links} current="/form"/>
                        <HomeArticle/>
                    </section>
                </Route>

                <Route path="/About">
                    <section>
                        <Header title="About MAF"/>
                        <NavigationBar links={Links} current="/about"/>
                        <HomeArticle/>
                    </section>
                </Route>
            </Switch>
            <FootBar/>
        </section>
    </Router>,

    document.getElementById('content')
);

module.hot.accept(); // hot reloading for dev