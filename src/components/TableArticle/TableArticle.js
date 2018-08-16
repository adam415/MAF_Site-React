import React from 'react';

import './TableArticle.css';

class TableArticle extends React.Component {
    render() {
        return (   
            <article className="article">
                <section className="table-section">
                    <h2 className="block__header">Submitted Users</h2>

                    <table className="table width_70per">
                        <thead>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Options</th>
                        </thead>
                        <tbody id="userRows"/>
                    </table>
                </section>
            </article>
        );
    }
}

export default TableArticle;