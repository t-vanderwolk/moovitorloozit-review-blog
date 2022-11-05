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
     <h1 style={{backgroundColor:"orange",border: "3px solid black",marginBottom:"2%", marginLeft:"20%", marginTop:"2%", marginRight:"20%"}} class = 'title'>Get A Quote</h1>
    
    <form style={{ backgroundColor:"white",
    marginRight: "20%",

    textAlign:"center",
    marginLeft:"20%",
     marginTop:"0%",
     marginBottom: "7%", 
    border: "3px solid black", 
    padding: "5%", fontSize:"150%"}} ref={form} onSubmit={sendEmail}>
      <h3>We Need A little More Information</h3>
    
      <input style={{fontSize:"100%", margin:"1%"}} type="text" name="user_name" placeholder='Name'/> <br></br>
      <input style={{fontSize:"100%", margin:"1%"}}  type="email" name="user_email" placeholder='Email'/> <br></br>
      <input style={{fontSize:"100%", margin:"1%"}}  type="phone" name="user_phone" placeholder='Phone Number'/> <br></br>
      <input style={{fontSize:"100%", margin:"1%"}} type="address" name="address" placeholder='Current Address' /> <br></br>
      <input style={{fontSize:"100%", margin:"1%"}} type="address" name="new_address" placeholder='Moving To Address'/> <br></br>
      <input style={{fontSize:"100%", margin:"1%"}} type="number" name="rooms" placeholder='How Many Rooms' /> <br></br>
      <input style={{fontSize:"100%", margin:"1%"}} type="number" name="miles" placeholder='Total Miles'/> <br></br>
      <input style={{fontSize:"100%", margin:"1%"}}  type="date" name="date" placeholder='Moving Date'/> <br></br>
      <label style={{fontSize:"100%", margin:"1%"}} >Heavy or Oversized Items? </label>
      <input style={{fontSize:"100%", margin:"1%"}} type="text" name="s_item" placeholder=''/> <br></br>

      <input style={{fontSize:"100%", margin:"1%"}}  type="submit" value="Send" /> <br></br>
    
    </form>
    </>
  );
};

export default QuotePage