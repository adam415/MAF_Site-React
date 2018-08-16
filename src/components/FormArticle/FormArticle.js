import React from 'react';

import './FormArticle.css';

class FormArticle extends React.Component {
    render() {
        return (
            <article>
                <section className="form-section">
                    <h2 className="block__header">Fill in Your Info</h2>
                    <form className="form" method="post">
                        <p className="main-text text-align_left">Your name:</p>
                        <input id="nameBox" className="input-box" type="text" name="userName"/>
                        <p className="main-text text-align_left">Your age:</p>
                        <input id="ageBox" className="input-box" type="number" name="userAge"/>
                        <input id="submitButton" className="form__button" type="submit" value="Submit"/>
                    </form>
                </section>
            </article>
        );
    }
}

export default FormArticle;