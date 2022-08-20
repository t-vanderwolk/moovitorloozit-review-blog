import React from "react";
import {Link,} from 'react-router-dom'
import '../style/Nav.css'
const NavBar =() => {
  
  return (
   <>
 	<header className="header">
		<h1 className="logo"><Link to ='./'>Moovit Or Loozit</Link>
        </h1>
      <ul className="main-nav">
        <li>
            <Link to ='/'>HomePage</Link></li>
        <li>
            <Link to ='/about'>About Us</Link></li>
        <li>
            <Link to ='/quote'>Get A Quote</Link></li>
        <li>
            <Link to = '/contact'>Contact Us</Link></li>

    </ul>
   </header>
   </>
  )
}

export default NavBar