import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';

import '../Common.css';
import './PagePresenter.css';

class PagePresenter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { Text: "The Header Text" };
    }

    render() {
        return (
            <section>
                <h1 className="margin_no page__main-header">{this.state.Text}</h1>
                <NavigationBar changePageTitle={this.setTitle}/>
            </section>
        );
    }

    setTitle(text) {
        this.setState({ Text: text });
    }
}

export default PagePresenter;