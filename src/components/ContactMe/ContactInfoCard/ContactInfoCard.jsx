import React from "react";
import "./ContactInfoCard.scss";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text}></img>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
