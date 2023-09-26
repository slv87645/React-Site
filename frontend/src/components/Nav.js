//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="../topics">Web Development Topics</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../staff">Staff</Link>
        <Link to="../order">Order</Link>
        <Link to="../log">Collectables</Link>
        
    </nav>
  );
}

export default Nav;
