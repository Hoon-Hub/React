import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch!</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>gwi01304@naver.com</h5>
            <a href="mailto:gwi01304@naver.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Email</h4>
            <h5>gwi01304@naver.com</h5>
            <a href="mailto:gwi01304@naver.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Email</h4>
            <h5>gwi01304@naver.com</h5>
            <a href="mailto:gwi01304@naver.com">Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
