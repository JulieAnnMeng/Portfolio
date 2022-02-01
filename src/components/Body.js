import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Body(){

    return (
        <div className="home">
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/resume">
                        <Resume />
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
        </div>
    )
}

export default Body;