import React from "react";
import "./Contact.scss"

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-overlay"/>
                <div className="contact-overlay-container">
                    <div className="title">GET IN TOUCH</div>
                    <img src="https://jeffwalker.com/wp-content/uploads/2018/06/contactjeffimg.png" className="jeff-overlay"/>
                </div>
                <div className="about">
                    As you can imagine, I get a lot of email. As much as I'd like to respond to everyone… it's physically impossible. However, I've got an AWESOME customer service team… and they will definitely get to your message. There's a good chance they'll forward it to me.
                </div>
            </div>
        )
    }
}

export default Contact;