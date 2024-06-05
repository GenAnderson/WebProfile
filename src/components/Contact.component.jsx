import { motion } from "framer-motion";
import { useRef } from "react";
import contactBG from "../images/mail.jpg";
import emailjs from "@emailjs/browser";

import "./Contact.styles.scss";

const Contact = ({ opacity, contactHandler }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7odam6k", "template_f64gxgs", form.current, {
        publicKey: "f7ubLR15pkBC2Sece",
      })
      .then(
        () => {
          alert("Thanks!");
          form.current.reset();
          contactHandler();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className={`contactFormContainer ${opacity ? "contactOpacity" : ""}`}
    >
      <img src={contactBG} alt="mail" className="contactBG"></img>
      <form className="form" onSubmit={sendEmail} ref={form}>
        <label>
          <p className="labelName">Name</p>
          <input type="text" required name="name"></input>
        </label>
        <label>
          <p className="labelName">Email</p>
          <input type="email" required name="Email"></input>
        </label>
        <label>
          <p className="labelName">Message</p>
          <textarea
            type="textarea"
            className="messageBox"
            rows={6}
            name="message"
            required
          ></textarea>
        </label>
        <div className="contactButtons">
          <button
            value="Back"
            className="button backButton"
            onClick={() => contactHandler()}
          >
            Back
          </button>
          <button type="submit" value="Submit" className="button submitButton">
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
