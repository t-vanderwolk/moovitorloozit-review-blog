import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const QuotePage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pejqmcv', 'template_01n7pkn', form.current, 'Bh7vWfiEwmCwmUBHU')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <>
     <h1 style={{borderTop: "3px solid black",borderLeft:"3px solid black",borderRight:"3px solid black",marginBottom:"0%", marginTop:"7%"}} class = 'title'>Get A Quote</h1>
    
    <form style={{ backgroundColor:"orange",
    marginRight: "7%",

    textAlign:"center",
    marginLeft:"7%",
     marginTop:"0%",
     marginBottom: "7%", 
    border: "3px solid black", 
    padding: "5%"}} ref={form} onSubmit={sendEmail}>
      <h3>We Need A little More Information</h3>
    
      <input type="text" name="user_name" placeholder='Name'/> <br></br>
      <input type="email" name="user_email" placeholder='Email'/> <br></br>
      <input type="phone" name="user_phone" placeholder='Phone Number'/> <br></br>
      <input type="address" name="address" placeholder='Current Address' /> <br></br>
      <input type="address" name="new_address" placeholder='Moving To Address'/> <br></br>
      <input type="number" name="rooms" placeholder='How Many Rooms' /> <br></br>
      <input type="number" name="miles" placeholder='Total Miles'/> <br></br>
      <input type="date" name="date" placeholder='Moving Date'/> <br></br>
      <label>Heavy or Oversized Items? </label>
      <input type="text" name="s_item" placeholder=''/> <br></br>

      <input type="submit" value="Send" /> <br></br>
    
    </form>
    </>
  );
};

export default QuotePage