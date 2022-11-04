import React from 'react'
import '../style/Review.css'

export default function Review(props) {
const { review } = props;
const { name, comment, date, location, rating } = review;
  return (

  <div className='review'>
    <div className='author'>{date}</div>
    <div className='rating'>
 {rating}
 </div>
    <blockquote className='comment'>
        {/* What does the structure look like, how do we want our reviews to look? */}
        {/* Display the Name */}
{/* {props.review.name} */}
{comment}
{/* {name},{comment},{date},{location},{rating} */}
        {/* Display the Comment */}

        {/* Display the Date */}

        {/* Display the Location */}

        {/* Display the Rating */}
    </blockquote>
    <div className='date'>
     {name},{location}
    </div>
    </div>  

  )
}
