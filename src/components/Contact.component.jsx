import { motion } from "framer-motion";
import contactBG from "../images/mail.jpg";

import "./Contact.styles.scss";

const Contact = ({ opacity, contactHandler }) => {
  return (
    <motion.div
      className={`contactFormContainer ${opacity ? "contactOpacity" : ""}`}
    >
      <img src={contactBG} alt="mail" className="contactBG"></img>
      <form className="form">
        <label>
          <p className="labelName">Name</p>
          <input type="text" required></input>
        </label>
        <label>
          <p className="labelName">Email</p>
          <input type="text" required></input>
        </label>
        <label>
          <p className="labelName">Message</p>
          <textarea
            type="textarea"
            className="messageBox"
            rows={6}
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
