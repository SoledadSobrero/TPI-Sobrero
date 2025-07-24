import React from "react"
import { Link } from "react-router"
import './ContactItem.css'

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    return (
        <div className="contact-item">
            <div className="contact-profile">  
                <img className="contact-img" src={img} alt={'${name} image profile'} />
                <div className="contact-message">
                    <Link className="contact-item" to={"/contact-details"}>
                        <h3>{name}</h3>
                    </Link>
                    <div>
                        {last_message.text}
                    </div>
                </div>
                <div className="time-unread">
                    <span className="time-conected">{last_time_connected}</span>
                    <span className="unread">{unread_messages}</span>
                </div>
            </div>   
        </div>
    )
}

export default ContactItem