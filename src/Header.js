import React from 'react';
import './App.scss';
import {Link} from "react-router-dom";


const arr = [
  { name: 'Home', path: "/" },
  { name: 'About', path: "/about" },
  { name: 'Programs', path: "/programs" },
  { name: 'Contact Us', path: "/contact" },
];

const Header = () => (
  <header className="App-header">
    <div className="App-header-logo">
      <div>JEFF</div>
      <div className="subtext"> WALKER </div>
    </div>
      <div className="App-header-toolbar">{arr.map(i => <Link to={i.path}> {i.name} </Link>)}</div>
  </header>
);

export default Header;
