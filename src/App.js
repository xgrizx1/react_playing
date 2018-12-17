import React, {Component} from 'react';
import './App.scss';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import {Switch, Route} from "react-router";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/contact' component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
