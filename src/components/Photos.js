import React from "react";
  function Photos() {
    return(

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src={require('../pictures/image2.jpeg')}class="d-block w-25" alt="crew"/>
    </div>
    <div class="carousel-item">
      <img src={require('../pictures/image3.jpeg')} class="d-block w-25" alt="crew"/>
    </div>
    <div class="carousel-item ">
      <img src={require('../pictures/image4.jpeg')} class="d-block w-25" alt="crew"/>
    </div>
    <div class="carousel-item">
      <img src={require('../pictures/nicky.jpeg')} class="d-block w-25" alt="crew"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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