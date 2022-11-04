import React from "react";
import {Link,} from 'react-router-dom'
import '../style/Nav.css'
const NavBar =() => {
  
  return (
   <>
 	<header className="header">
   
    
    <Link to = '/'><img className="nav-logo" width="15%"src={require('../icons/moovitLogo.png')} alt="logo" /></Link>
    
      <ul className="main-nav">
   
        <li>
            <Link to ='/about'>About</Link></li>
            <li>
            <Link to = '/contact'>Contact</Link></li>
        <li>
            <Link to ='/quote'>Quote</Link></li>
            <li>
            <Link to ='/review'>Reviews</Link></li>
     

    </ul>
   </header>
   </>
  )
}

export default NavBar