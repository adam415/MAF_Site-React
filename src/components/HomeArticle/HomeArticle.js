import React from 'react';

import '../Common.css';
import './HomeArticle.css';

import pic from '../../pics/the_furry_thing_8.jpg';

class HomeArticle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="article">
                <section className="article__pic-column">
                    <img src={pic} width="100%"/>
                    <p className="ref-text">
                        <a className="link-text" href="https://www.instagram.com/kamweiatwork/">Kamwei Fong</a> 
                         — The Furry Thing Series. Kitty No.8, 2018
                    </p>
                </section>
                <section className="article__text-column">
                    <section className="greetings-block">
                        <h2 className="block__header">Home Page</h2>
                        <p className="main-text">Welcome to the MAF Site! I hope you'll like this page.<br/>Let's have a look at this fluffy cat :)</p>
                    </section>
                </section>
            </article>
        );
    }
}

export default HomeArticle;