import React from 'react';
import { useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Nav from "./components/Nav";
import Homepage from "./directories/Homepage";
import Demo from "./directories/Demo";

export default () => {
    const [navIsOpen, setNavIsOpen] = useState(true);
    
    return (
        <Router history={createBrowserHistory()}>
            <Nav 
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
            />
            <div className="bodyContainer" style={navIsOpen ? {} : { paddingTop: "20px"}}>
                <Switch>
                    <Route path="/" component={Homepage} exact />
                    <Route path="/demo" component={Demo} exact />
                </Switch>
            </div>
        </Router>
    );
};