"use client";
import React from "react";
import "./contact.css";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className="contactContainer">
      <div className="contactImg">
        <Image
          src="/contact.png"
          alt="contact"
          fill
          className="ContactImgSrc"
        />
      </div>
      <div className="contactForm">
        <form action="" className="contactForms">
          <input type="text" placeholder="Name or Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
