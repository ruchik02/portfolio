import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp}  from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iohjs3j', 'template_na5knsk', form.current, 'rfnXxijYlJljrd0a7')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {/* 1 */}
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icons" />
            <h4>Email</h4>
            <h5>sruchika004@gmail.com</h5>
            <a href="mailto:sruchika004@gmail.com" target="_blank">Send a Message</a>
          </article>
          {/* 2 */}
          <article className="contact_option">
            <FaTelegramPlane className="contact_option-icons" />
            <h4>Telegram</h4>
            <h5>Ruchika Sharma</h5>
            <a href="https://webk.telegram.org/" target="_blank">Send a Message</a>
          </article>
          {/* 3 */}
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icons" />
            <h4>Whatsapp</h4>
            <h5>+91822-18-20-300</h5>
            <a href="https://api.whatsapp.com/send?phone=+918221820300" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email"  placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
