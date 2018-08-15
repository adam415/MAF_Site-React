import React from 'react';

import '../Common.css';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <h1 className="margin_no page__main-header">{this.props.title}</h1>
        );
    }
}

export default Header;