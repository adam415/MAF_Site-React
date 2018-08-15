import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import '../Common.css';
import './NavigationBar.css';

import HomeArticle from '../HomeArticle/HomeArticle';

const Links = [
    { title: "Home",    link: "/",       requireExact: true,     component: HomeArticle },
    { title: "Table",   link: "/table",  requireExact: false,    component: HomeArticle },
    { title: "Form",    link: "/form",   requireExact: false,    component: HomeArticle },
    { title: "About",   link: "/about",  requireExact: false,    component: HomeArticle }
];

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { current: "Current Page" };
    }

    changePage(title) {
        if (!this.props.changePageTitle) {
            this.props.changePageTitle(title);
        }

        this.setState({ current: title });
    }

    render() {
        let navItems = [], routes = [];

        Links.forEach(item => {
            let itemClass = this.state.current === item.title ?
                "nav-bar__item_current" : "nav-bar__item";

            let navItem = <Link 
                className={itemClass} to={item.link}
                onClick={e => this.refreshTitle(item.title)}>
                    {item.title}
                </Link>;

            navItems.push(navItem);
            routes.push(<Route path={item.link} exact={item.requireExact} component={item.component}/>);
        });

        return (
            <BrowserRouter>
                <section>
                    <section className="nav-bar">{navItems}</section>
                    {routes}
                </section>
            </BrowserRouter>
        );
    }
}

export default NavigationBar;