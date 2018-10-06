import React from "react";

const MenuItem = ({ name, onClick, styles }) => (
  <div className="App-header-menu-item" style={styles} onClick={onClick}>
    {name}
  </div>
);

export default MenuItem;