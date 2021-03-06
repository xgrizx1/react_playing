import React, { Component } from "react";
import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { Switch, Route } from "react-router";
import Programs from "./Programs/Programs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/programs" component={Programs} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
