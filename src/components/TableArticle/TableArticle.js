import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import { usersUrl } from '../../../config';

import './TableArticle.css';

class TableArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            id: null
        };
    }

    downloadUsers() {
        Axios.get(usersUrl).then(res => {
            this.setState({users: res.data});
        });
    }

    componentDidMount() {
        this.downloadUsers();
    }

    selectUser(id, e) {
        this.setState({
            id: id
        });
    }

    removeUser(id, e) {
        Axios.delete(`${usersUrl}${id}`).then(res => {
            this.downloadUsers();
        });
    }

    render() {
        if (this.state.id != null)
            return <Redirect to={`/form/${this.state.id}`}/>;
        else return (   
            <article className="article">
                <section className="table-section">
                    <h2 className="block__header">Submitted Users</h2>

                    <table className="table width_70per">
                        <thead>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Options</th>
                        </thead>
                        <tbody>
                            {this.state.users.map(user =>
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <section className="options-block">
                                            <a className="link-text table__link-text" onClick={this.selectUser.bind(this, user._id)}>edit</a>
                                            <a className="link-text table__link-text" onClick={this.removeUser.bind(this, user._id)}>remove</a>
                                        </section>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </article>
        );
    }
}

export default TableArticle;