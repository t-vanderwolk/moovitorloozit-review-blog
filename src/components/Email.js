
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
             
          <div style={{fontSize: "1.2rem",backgroundColor:"orange",
          display:"flexbox",
          textAlign: "center",
          marginLeft: "7%",
          marginRight: "7%",
          marginTop: "0%",
          marginBottom: "7%",
          border: "3px black solid"
          // padding: "7%",
          }}>
    
          {/* //Form layout that requires a Name, Email, and message */}
          <form style={{paddingBottom: "12%"}} className="test-mailing" onSubmit={this.handleSubmit}>

 

            <h3 style={{marginTop:"0%"}}>We Need A Little More Information</h3>
              <div>
               
                  <input className="form-control email-inputs" name="user_name" type="text" placeholder="Name"
                    id="name" onChange={this.nameChange} required/>
                    </div>
                    <div>
        
                  <input className="form-control email-inputs" name="user_email" type="text"
                  placeholder="Email"  id="email" onChange={this.emailChange} required/>
                    </div>
                    <div>
                  <input className="form-control email-inputs" type="text" name="phone" id="phone" placeholder="Phone Number"/>  
                </div>
                <div>
                <input className="form-control email-inputs" type="text" name="currentAddress" id="currentAddress" placeholder='Current Address'  required/>

                </div>
                <div>
                <input className="form-control email-inputs" type="text" name="movingAddress" id="movingAddress" placeholder='Moving To Address' required/>

                </div>
                <div>
                      
                <input className="form-control email-inputs"  type="number" name="rooms" id="rooms" placeholder='How Many Rooms' required/>

                </div>
                <div>
                                   
            
             <input className="form-control email-inputs"  type="date" name="date" id="date"  
                            placeholder='Moving Date'    required/>
                                </div>
              <div>
            
             <input className="form-control email-inputs" type="text" name="miles" id="miles"  
                           placeholder='Total Miles'     required/>
            </div>

            <input type="submit" value="Submit" className="btn btn-outline-light" />
          
            
        </form>
       </div>
       
        )
      }
}

export default Email
