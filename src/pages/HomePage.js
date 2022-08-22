import React from 'react'
// import '../style/Home.css'
const HomePage =() => (
    <>

    {/* <h1 className = 'title' style={{backgroundColor: "rgb(0, 200, 255)"}}>Moovit Or Loozit Mooving Co.</h1> */}
    <h1 style={{backgroundColor: "orange", margin: "0%" }} className ='title'>Moovit Or Loozit Mooving Co.</h1>

<div style={{
        display: "flex",
       alignContent:"baseline",
       backgroundColor: "orange"
       
      }}className='homepage-icons'>
<img  style={{ width:"30%", margin: "2%" }} className="washington" src={require('../icons/washington.png')} alt="washington state" />
<img  style={{ width:"40%", margin: "2%" }} className="nav-logo" src={require('../icons/moovitLogo.png')} alt="crew" />

<img  style={{ width:"30%", margin: "2%" }}  className="washington" src={require('../icons/us-map.png')} alt="washington state" />
</div>

  </>
  );

  export default HomePage;

