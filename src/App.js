import React, {Component} from 'react';
import './App.scss';
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
               <Header/>
                <div className="main-container">

                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
