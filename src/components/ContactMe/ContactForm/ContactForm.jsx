import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-form-content" id="contact">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
            onChange={handleChanges}
          ></input>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
            onChange={handleChanges}
          ></input>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          nChange={handleChanges}
        ></input>
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          nChange={handleChanges}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
