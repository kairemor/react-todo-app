import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return( 
    <header style={headerStyle}>
      <h1>TodoList of KaireMor</h1>
      <Link style={linkStyle} to="/">Home</Link> |  <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
    background : '#444', 
    textAlign : 'center'
}
const linkStyle = {
    textDecoration : 'none',
    color :'#fff'
}
export default Header 