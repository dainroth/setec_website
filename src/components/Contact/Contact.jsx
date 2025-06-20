import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
 
function Contact() {
    // going to web3form in order to get the form submission
    // and then paste in the code from it

      const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    // and this form data will be send to the api link 
    const formData = new FormData(event.target);

    formData.append("access_key", "7459166f-ff69-445f-be8e-47b1ff3a5559");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" /> rothanaemily@gmail.com</li>
            <li><img src={phone_icon} alt="" /> +855 8765432</li>
            <li><img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge
                MA 02139, United States</li>
        </ul>
        </div>
        
        <div className="contact-col">
            {/* when the from is submited the form will executed the onSubmit function, and will display result sending.*/}

            <form onSubmit={onSubmit}>
                <label> Your name </label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone'placeholder='Enter your Phonenumber' required />
                <label>Wrtie your message here</label>
                <textarea name="message" row="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit here <img src={white_arrow} alt="" /></button>
            </form>
            {/* whenever you apply or try to send any message here, it will alert the admin about it. */}
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact