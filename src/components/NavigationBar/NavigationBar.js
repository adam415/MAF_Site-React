import React from 'react';

// import Link from 'react-router-dom';

import '../Common.css';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        let navItems = [];

        this.props.links.forEach(item => {
            let itemClass = this.props.current === item.link ?
                "nav-bar__item_current" : "nav-bar__item";
            let navItem = <a className={itemClass} href={item.link}>{item.nav}</a>;

            navItems.push(navItem);
        });

        return (
            <section className="nav-bar">{navItems}</section>
        );
    }
}

export default NavigationBar;