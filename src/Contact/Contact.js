import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-overlay" />
        <div className="contact-overlay-container">
          <div className="title">GET IN TOUCH</div>
          <img
            src="https://jeffwalker.com/wp-content/uploads/2018/06/contactjeffimg.png"
            className="jeff-overlay"
          />
        </div>
        <div className="about">
          As you can imagine, I get a lot of email. As much as I'd like to
          respond to everyone… it's physically impossible. However, I've got an
          AWESOME customer service team… and they will definitely get to your
          message. There's a good chance they'll forward it to me.
        </div>

        <div className="message-form-container">
          <div className="message-form">
            <form>
              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Name</label>
              </div>
              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Subject</label>
              </div>
              <div className="group">
                <input type="text" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Message</label>
              </div>
              <button className="button">
                  Send Message
              </button>
            </form>
          </div>
          <div className="mailing-address">
            <h5> Mailing Address </h5>
            <p>
              {" "}
              Internet Alchemy, Inc Attention Jeff Walker PO Box 585, Durango,
              CO 81302{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
