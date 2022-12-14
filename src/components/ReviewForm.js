import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import '../style/Review.css';
import StarRating from './StarRating';

const ReviewForm = () => {
  // <h2>Leave us a Revie</h2>;

  const [enteredRating, setRating] = useState('');
  const [enteredName, setName] = useState('');
  const [enteredLocation, setLocation] = useState('');
  const [enteredComment, setComment] = useState('');
  const [enteredDate, setDate] = useState('');

  const ratingChangeHandler = (event) => {
    setRating(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const commentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //reset the values of input fields
    setRating('');
    setName('');
    setLocation('');
    setComment('');
    setDate('');

    return alert(
      'Entered Values are:' +
        enteredRating +
        ',' +
        enteredName +
        ',' +
        enteredLocation +
        ',' +
        enteredComment +
        ',' +
        enteredDate
    );
  };

  return (
    <Alert
      style={{
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: 'white',
        border: '3px solid black',
      }}
      variant="primary"
    >
      <Container>
        <h2 style={{ textAlign: 'center' }}>Leave us a Review</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="form.rating">
            <Form.Label>Rating</Form.Label>
            <StarRating />
            {/* <Form.Control
              type="number"
              value={enteredRating}
              onChange={ratingChangeHandler}
              placeholder="How Was Our Service"
              required */}
            {/* /> */}
          </Form.Group>

          <Form.Group controlId="form.name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="form.location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={enteredLocation}
              onChange={locationChangeHandler}
              placeholder="Enter Location"
              required
            />
          </Form.Group>
          <Form.Group controlId="form.comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              value={enteredComment}
              onChange={commentChangeHandler}
              placeholder="Enter Comment"
              required
            />
          </Form.Group>
          <Form.Group controlId="form.date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              placeholder="Enter Date"
              required
            />
          </Form.Group>

          <Button type="submit">Submit Review</Button>
        </Form>
      </Container>
    </Alert>
  );
};
export default ReviewForm;
