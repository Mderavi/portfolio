import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name"></input>
          <input type="text" name="lastname" placeholder="Last Name"></input>
        </div>
        <input type="text" name="email" placeholder="Email"></input>
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
