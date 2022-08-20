import React from "react";
  function Photos() {
    return(
      <div className="Photos" style={{
        display: "flex",
       alignContent:"center",
       
      }}>
        <img width="25%" className="about-photos" src={require('../pictures/image2.jpeg')} alt="crew" />
        <img width="25%"  className="about-photos"src={require('../pictures/image3.jpeg')} alt="crew" />
        <img width="25%" className="about-photos"src={require('../pictures/image4.jpeg')} alt="crew" />
        <img width="25%" className="about-photos"src={require('../pictures/nicky.jpeg')} alt="crew" />
      </div>
    );
  }

  export default Photos;