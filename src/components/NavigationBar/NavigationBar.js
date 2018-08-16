import React from 'react';
import { Link } from 'react-router-dom';

import '../Common.css';
import './NavigationBar.css';

import Articles from '../../articles';

class NavigationBar extends React.Component {
    render() {
        let links = [];
        Articles.forEach(article => {
            let linkClass = this.props.current === article.link
                ? "nav-bar__item_current" : "nav-bar__item";

            links.push(<Link className={linkClass} to={article.link}>{article.nav}</Link>);
        });

        return (
            <section className="nav-bar">
                {links}
            </section>
        );
    }
}

export default NavigationBar;