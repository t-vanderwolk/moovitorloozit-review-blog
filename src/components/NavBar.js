import React from "react";
import {Link,} from 'react-router-dom'
import '../style/Nav.css'
const NavBar =() => {
  
  return (
   <>
 	<header className="header">
   <Link to = '/'>
    <img className="nav-logo" width="15%"src={require('../icons/logo.png')} alt="crew" />
    </Link>
     
      <ul className="main-nav">
   
        <li>
            <Link to ='/about'>About</Link></li>
            <li>
            <Link to = '/contact'>Contact</Link></li>
        <li>
            <Link to ='/quote'>Quote</Link></li>
            <li>
            <Link to ='/quote'>Reviews</Link></li>
     

    </ul>
   </header>
   </>
  )
}

export default NavBar