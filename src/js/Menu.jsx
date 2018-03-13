import React from 'react';
import Flux from "react-flux-dash";
import {Link} from "react-router-dom";

export class Menu extends Flux.View {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Contacts</Link>
                        <Link to="/create-contact">Create Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}