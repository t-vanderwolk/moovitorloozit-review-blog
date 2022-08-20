import React from "react";
import {Link,} from 'react-router-dom'
import '../style/Nav.css'
const NavBar =() => {
  
  return (
   <>
 	<header class="header">
		<h1 class="logo"><Link to ='./'>Moovit Or Loozit</Link>
        </h1>
      <ul class="main-nav">
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