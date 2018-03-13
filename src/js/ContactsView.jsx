import React from 'react';

import {Menu} from './Menu';

export class ContactsView extends React.Component {

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>Contacts List</h1>
                </header>
                <div>
                    <Menu/>
                </div>
                <section className="main">

                </section>
                <footer className="footer">
                  <span className="todo-count">
                    <strong>
                    </strong>
                  </span>
                </footer>
            </section>
        );
    }
}