
import React from 'react'
import Swal from 'sweetalert2'

class Email extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
        rooms: '',
        phone: '',
        name: '',
        email: '',
        currentAddress: '',
        movingAddress: '',
        miles: '',
        date: ''
                     };
      }
      // saves the user's name entered to state
      nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      roomChange = (event) => {
        this.setState({rooms: event.target.value})
      }
      phoneChange = (event) => {
        this.setState({phone: event.target.value})
      }
      dateChange = (event) => {
        this.setState({date: event.target.value})
      }
      currentAdressChange = (event) => {
        this.setState({currentAddress: event.target.value})
      }
      movingAddressChange = (event) => {
        this.setState({movingAddress: event.target.value})
      }
      
      // saves the user's email entered to state
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }

      // saves the user's message entered to state
    

      //onSubmit of email form
      handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'basic';
    
        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
          feedback: this.state.feedback,
          rooms: this.state.rooms, 
          phone: this.state.phone,
         name: this.state.name, 
        email: this.state.email,
        currentAddress: this.state.currentAddress,
        movingAddress: this.state.movingAddress,
        date: this.state.date,
        miles: this.state.miles
                                       }
                         )

      }
    
      //Custom EmailJS method
      sendFeedback = (templateId, variables, ) => {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            // Email successfully sent alert
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          // Email Failed to send Error alert
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }
    
      render() {
        return (
          
          //Form layout that requires a Name, Email, and message
          <form className="test-mailing" onSubmit={this.handleSubmit}>

          <>
            <div style={{fontSize: "1.2rem",backgroundColor:"rgb(0, 200, 255)"}}>

            <h1>Get A Quote</h1>
              <div>
                <label htmlFor="name">Name</label>
                  <input className="form-control email-inputs" name="user_name" type="text" 
                    id="name" onChange={this.nameChange} required/>
                    </div>
                    <div>
                <label htmlFor="email">Email</label>
                  <input className="form-control email-inputs" name="user_email" type="text"
                    id="email" onChange={this.emailChange} required/>
                    </div>
                    <div>
                <label htmlFor="phone">Phone Number</label>
                  <input className="form-control email-inputs" type="text" name="phone" id="phone" />  
                </div>
                <div>
                <label htmlFor="currentAddress">Current Address</label>
                <input className="form-control email-inputs" type="text" name="currentAddress" id="currentAddress"  required/>

                </div>
                <div>
                <label htmlFor="movingAddress">Moving To Address</label>
                <input className="form-control email-inputs" type="text" name="movingAddress" id="movingAddress"  required/>

                </div>
                <div>
                      
                <label htmlFor="rooms">How Many Rooms</label>
                <input className="form-control email-inputs"  type="number" name="rooms" id="rooms"  required/>

                </div>
                <div>
                                   
             <label htmlFor="date">Moving Date</label>
             <input className="form-control email-inputs"  type="date" name="date" id="date"  
                                required/>
                                </div>
              <div>
              <label htmlFor="miles">Total Miles Moving</label>
             <input className="form-control email-inputs" type="text" name="miles" id="miles"  
                                required/>
            </div>

            <input type="submit" value="Submit" className="btn btn-outline-light" />
            </div>
            </>
          </form>
       
        )
      }
}

export default Email
