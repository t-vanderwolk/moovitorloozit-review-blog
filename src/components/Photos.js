import React from "react";
  function Photos() {
    return(
      <div className="Photos" style={{
        display: "flex",
       alignContent:"center",
       backgroundColor: "orange",
       marginRight: "7%", 
       marginLeft:"7%",
       border: "3px solid black"
       
      }}>
        <img style={{ width:"20%", margin: "2.5%", border: "3px solid black" }} className="about-photos" src={require('../pictures/image2.jpeg')} alt="crew" />
        <img style={{ width:"20%", margin: "2.5%", border: "3px solid black" }} width="20%"  className="about-photos"src={require('../pictures/image3.jpeg')} alt="crew" />
        <img style={{ width:"20%", margin: "2.5%", border: "3px solid black" }}  width="20%" className="about-photos"src={require('../pictures/image4.jpeg')} alt="crew" />
        <img style={{ width:"20%", margin: "2.5%", border: "3px solid black" }}  width="20%" className="about-photos"src={require('../pictures/nicky.jpeg')} alt="crew" />
      </div>
    );
  }

  export default Photos;