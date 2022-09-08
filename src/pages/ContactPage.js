import React from 'react'
const ContactPage=() => (
    <>
  
    <h1 style={{borderTop: "3px solid black",borderLeft:"3px solid black",borderRight:"3px solid black",marginBottom:"0%", marginTop:"7%"}} class = 'title'>Contact Us</h1>
  

<div style={{ backgroundColor:"orange",marginRight: "7%", textAlign:"center",
       marginLeft:"7%", marginBottom:"7%",
       border: "3px solid black" }}>
<h2 style={{ textAlign:"center"}}>Contact Us By Email, Phone or Text 24/7!</h2>
<ul>
  <li>
<img  style={{ width:"10%", height:"100%", padding: "2%" }} className="mail" src={require('../pictures/mail.png')} alt="email-icon" /> 
<h3>moovitorloozit@gmail.com</h3></li>
<li>
<img  style={{ width:"10%", height:"100%", padding: "2%" }} className="phone" src={require('../pictures/smartphone-call.png')} alt="phone-icon" /> 
<h3>(509)-828-7665</h3>
</li>
</ul>
</div>


  </>
    
  );

  export default ContactPage;