import React from 'react'
// import '../style/Home.css'
const HomePage =() => (
    <>
        <h1 style={{marginTop:"7%",marginBottom: "0%"}}className ='title'>MOOVIT OR LOOZIT</h1>
    <h2  style={{marginTop: "0%"}} className ='title'> MOOVING CO.</h2>
<div className='hompage-head'style={{display:"flex", justifyContent:"space-evenly", alignContent:"baseline", backgroundColor:"orange", marginLeft:"7%", marginRight:"7%"}}>




<img  style={{ width:"20%", height:"100%", padding: "2%" }} className="washington" src={require('../icons/washington.png')} alt="washington state" /> 

<img  style={{ width:"30%", }} className="nav-logo" src={require('../icons/moovitLogo.png')} alt="crew" /> 

<img  style={{ width:"20%", height:"100%",  padding: "2%"}}  className="washington" src={require('../icons/us-map.png')} alt="washington state" />

</div>
<h3 style={{backgroundColor: "orange", marginTop: "0%", marginLeft:"7%", marginRight:"7%", marginBottom:"7%"}} className ='title'>~"Let's Get MOOvin!"</h3>


        
<footer className='footer' style={{
display: "flex",
justifyContent: "space-evenly",
  alignContent:"baseline",
alignItems: "baseline",
  border: "2px solid black",
   backgroundColor: "orange",
      
   }}>
        <img style={{ width:"10%", margin:"12", padding: "0%", paddingBottom:"0%" }} id="empty-boxes" src={require('../icons/boxes.png')} alt="washington state" />
        <img style={{ width:"10%", margin:"12", padding: "0%", paddingBottom:"0%" }} id="empty-boxes" src={require('../icons/baggage.png')} alt="washington state" />
         <img style={{ width:"10%", margin:"12", padding: "0%", paddingBottom:"0%" }} id="empty-boxes"  src={require('../icons/moving-truck.png')} alt="washington state" />
        
    </footer>
    

  </>
  );

  export default HomePage;

