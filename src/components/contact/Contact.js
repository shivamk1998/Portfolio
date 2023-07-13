import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const recipientEmail = 'shivamkumarsingh1998@gmail.com';
  const mailtoLink = `mailto:${recipientEmail}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize EmailJS with your User ID
    emailjs.init('LxVhI_LtPLwD7BS41');

    // Prepare the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
    };

    // Send the email
    emailjs.send('service_jb7mn1e', 'template_ddxg2zd', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response.status);
        // Handle success, e.g., display a success message or redirect to a thank you page
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Handle error, e.g., display an error message to the user
      });

    // Reset the form after submitting
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Fill up the form or <a href={mailtoLink}>send an email</a>.</p>
        </div>
        <form onSubmit={handleSubmit} className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Insert your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Insert your subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="contact_form-div">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
