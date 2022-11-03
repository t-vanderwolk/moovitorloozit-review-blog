import React from 'react';
import Review from '../components/Review';
import uhaul from '../data/reviews/uhaul.json';


export default function ReviewPage() {
  // Imperative Approach
  const reviews0 = [];
  for (let i = 0; i < uhaul.reviews.length; i++) {
    const review = uhaul.reviews[i];
    reviews0.push(<Review review={review} />);
  }

  const reviews2 = [];
  uhaul.reviews.forEach((review) => {
    reviews2.push(<Review review={review} />);
  });

  // Functional Approach
  const reviews1 = uhaul.reviews.map((review) => <Review review={review} />);

  return (
    <>
      {/* <img  style={{ width:"100%",height:"100%", padding: "2%",marginTop:"5%", marginBottom:"5%" }} className="inProgress" src={require('../pictures/inProgress2.jpeg')} alt="inProgress" />  */}
      <div className="comment">{reviews1}</div>
    </>
  );
}
