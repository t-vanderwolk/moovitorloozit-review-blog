import React from "react";
  function Photos() {
    return(
      <div className="Photos" style={{
        display: "flex",
       alignContent:"center",
       backgroundColor: "#469DE1"
       
      }}>
        <img style={{ width:"20%", margin: "2.5%" }} className="about-photos" src={require('../pictures/image2.jpeg')} alt="crew" />
        <img style={{ width:"20%", margin: "2.5%"}} width="20%"  className="about-photos"src={require('../pictures/image3.jpeg')} alt="crew" />
        <img style={{ width:"20%", margin: "2.5%"}}  width="20%" className="about-photos"src={require('../pictures/image4.jpeg')} alt="crew" />
        <img style={{ width:"20%", margin: "2.5%"}}  width="20%" className="about-photos"src={require('../pictures/nicky.jpeg')} alt="crew" />
      </div>
    );
  }

  export default Photos;