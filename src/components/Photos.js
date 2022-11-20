import React from "react";
  function Photos() {
    return(

      <div className="Photos" style={{
        display: "flex",
      margin:"2%",
       
       borderTop: "5px solid black" ,
       borderBottom: "5px solid black" ,
       borderLeft: "5px solid black" ,
       borderRight: "5px solid black" 
      
       
       
      }}>

      <img style={{width:"25%",  borderRight: "5px solid black"  }} src={require('../pictures/image2.jpeg')} alt="crew"/>
   
    
      <img  style={{width:"25%",   borderRight: "5px solid black" }}  src={require('../pictures/image3.jpeg')}  alt="crew"/>
   
    
      <img  style={{width:"25%",   borderRight: "5px solid black"  }} src={require('../pictures/image4.jpeg')} alt="crew"/>
    
 
      <img style={{width:"25%"}}  src={require('../pictures/nicky.jpeg')} alt="crew"/>
    
  </div>

 
    //   <div className="Photos" style={{
    //     display: "flex",
    //    alignContent:"center",
    //    backgroundColor: "white",
    //   //  marginRight: "7%", 
    //   //  marginLeft:"7%",
    //    border: "3px solid black"
       
    //   }}>
    //     <img style={{ width:"25%",  border: "3px solid black" }} className="about-photos" src={require('../pictures/image2.jpeg')} alt="crew" />
    //     <img style={{ width:"25%", border: "3px solid black" }} width="20%"  className="about-photos"src={require('../pictures/image3.jpeg')} alt="crew" />
    //     <img style={{ width:"25%",  border: "3px solid black" }}  width="20%" className="about-photos"src={require('../pictures/image4.jpeg')} alt="crew" />
    //     <img style={{ width:"25%",  border: "3px solid black" }}  width="20%" className="about-photos"src={require('../pictures/nicky.jpeg')} alt="crew" />
    //   </div>
     );
  }

  export default Photos;