import React from 'react';
import './App.scss';
import MenuItem from './Common/MenuItem';



const arr = [
  { name: 'Home', onClick: () => {} },
  { name: 'About', onClick: () => {} },
  { name: 'Programs', onClick: () => {} },
  { name: 'Contact Us', onClick: () => {} },
];

const Header = () => (
  <header className="App-header">
    <div className="App-header-logo">
      <div>JEFF</div>
      <div className="subtext"> WALKER </div>
    </div>
    <div className="App-header-toolbar">{arr.map(i => <MenuItem name={i.name} onClick={i.onClick()} />)}</div>
  </header>
);

export default Header;
