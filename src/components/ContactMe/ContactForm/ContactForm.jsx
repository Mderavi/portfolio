import React, { useState } from "react";
import "./ContactForm.scss";
import Swal from "sweetalert2";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ed634784-9429-4bc0-afe1-26ba4bdd63f3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your messgesent successfully!",
        icon: "success",
      });
    }
  };
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="contact-form-content" id="contact">
      <form onSubmit={onSubmit}>
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
          required
          nChange={handleChanges}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
