import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route exact path="/" name="Home" component={App}/>
            <Route path="/about" name="About" component={About} />
            <Route path="/portfolio" name="Portfolio" component={Portfolio} />
            <Route path="/contact" name="Contact" component={Contact} />
        </Switch>
    </HashRouter>
), document.getElementById('root'));
