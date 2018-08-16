import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import { usersUrl } from '../../../config';

import './FormArticle.css';

class FormArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId:   null,
            userName: "",
            userAge:  "",
            redirect: false
        };

        if (this.props.match.params.userId !== undefined) {
            this.state.userId = this.props.match.params.userId;
            this.getUser(this.state.userId);
        }
    }

    getUser(userId) {
        Axios.get(usersUrl + userId).then(res => this.setState({
            userName: res.data.name,
            userAge: res.data.age
        })).catch(e => this.setState({
            userName: res.data.name,
            userAge: res.data.age
        }));
    }

    submitForm(e) {
        e.preventDefault();

        let data = {
            userName: this.state.userName,
            userAge:  this.state.userAge
        };

        // Почему-то возвращает код 500, хотя пользователь успешно добавляется
        // По этой же причине Table иногда успевает загрузиться раньше, чем выполнится запрос
        if (this.state.userId !== null) {
            Axios.put(`${usersUrl}${this.state.userId}`, data)/*.catch(reason => {
                alert(`Error: ${reason}`);
            }).then(res => {
                this.setState({ redirect: true });
            })*/;
        } else {
            Axios.post(`${usersUrl}`, data)/*.catch(reason => {
                alert(`Error: ${reason}`);
            }).then(res => {
                this.setState({ redirect: true });
            })*/;
        }
        this.setState({ redirect: true });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        let button = "Submit";

        if (this.state.redirect) return <Redirect to={'/table'}/>;

        if (this.state.userId !== null) {
            button = "Edit";
        }

        return (
            <article>
                <section className="form-section" onSubmit={this.submitForm.bind(this)}>
                    <h2 className="block__header">Fill in Your Info</h2>
                    <form className="form" method="post">
                        <p className="main-text text-align_left">Your name:</p>
                        <input id="nameBox" className="input-box" type="text" name="userName" value={this.state.userName} onChange={this.handleChange.bind(this)}/>
                        <p className="main-text text-align_left">Your age:</p>
                        <input id="ageBox" className="input-box" type="number" name="userAge" value={this.state.userAge} onChange={this.handleChange.bind(this)}/>
                        <input id="submitButton" className="form__button" type="submit" value={button}/>
                    </form>
                </section>
            </article>
        );
    }
}

export default FormArticle;