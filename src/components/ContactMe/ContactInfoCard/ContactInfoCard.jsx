import React from "react";
import "./ContactInfoCard.scss";

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card-link"
    >
      <div className="contact-details-card">
        <div className="icon">
          <img src={iconUrl} alt={text}></img>
        </div>
        <p>{text}</p>
      </div>
    </a>
  );
};

export default ContactInfoCard;
