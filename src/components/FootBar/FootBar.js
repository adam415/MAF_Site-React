import React from 'react';

import './FootBar.css';

class FootBar extends React.Component {
    render() {
        return (
            <footer className="foot-bar">
                <p className="foot-bar__text">The MAF Site. &copy; Adam, 2018. All Rights Reserved.</p>
            </footer>
        );
    }
}

export default FootBar;