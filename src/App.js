import React, {Component} from 'react';
import './App.scss';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div style={{marginBottom: 90}} />
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;
