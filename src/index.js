import React from 'react';
import ReactDOM from 'react-dom';

import PagePresenter from './components/PagePresenter/PagePresenter';

import './index.css';

ReactDOM.render(
    <PagePresenter/>,

    document.getElementById('content')
);

module.hot.accept(); // hot reloading for dev