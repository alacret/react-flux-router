import React from 'react';

import Flux from "react-flux-dash";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ContactsView} from "./ContactsView";
import {NewContactView} from "./NewContactView";
import {ContactView} from "./ContactView";

export class Home extends Flux.View {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={ContactsView} />
                            <Route exact path="/new-contact" component={NewContactView}/>
                            <Route exact path="/contact/:id" component={ContactView}/>
                            <Route exact path="/" render={() => <h1>Hello</h1>}/>
                            <Route render={() => <h1>Not found!</h1>}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}