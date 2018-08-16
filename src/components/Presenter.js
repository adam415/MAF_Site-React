import React from 'react';

import Header from './Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import FootBar from './FootBar/FootBar';

class Presenter extends React.Component {
    render () {
        return (
            <section>
                <Header title={this.props.header}/>
                <NavigationBar current={this.props.current}/>
                {React.createElement(this.props.component)}
                <FootBar/>
            </section>
        );
    }
}

export default Presenter;