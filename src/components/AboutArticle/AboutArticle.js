import React from 'react';

import './AboutArticle.css';

class AboutArticle extends React.Component {
    render() {
        return ( 
            <article>
                <section className="info_section">
                    <h2 className="block__header">What is MAF?</h2>
                    <p className="main-text">MAF is the Main-About-Form site, the first Adam's homework web project.<br/>
                        <a className="link-text" href="https://github.com/adam415/MAF_Site-React">Click here for GitHub repo</a>
                    </p>
                </section>
            </article>
        );
    }
}

export default AboutArticle;