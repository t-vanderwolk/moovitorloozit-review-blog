import React from 'react'


export default function Review(props) {
const { review } = props;
const { name, comment, date, location, rating } = review;
  return (
    <div>
        {/* What does the structure look like, how do we want our reviews to look? */}
        {/* Display the Name */}
{/* {props.review.name} */}
{name},{comment},{date},{location},{rating}
        {/* Display the Comment */}

        {/* Display the Date */}

        {/* Display the Location */}

        {/* Display the Rating */}
    </div>
  )
}
