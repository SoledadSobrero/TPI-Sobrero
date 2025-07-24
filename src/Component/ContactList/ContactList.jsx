import React, {useContext} from "react"
import {ContactContext} from "../../Context/ContactContex"
import ContactItem from "../ContactItem/ContactItem"
import './ContactList.css'

const ContactList = () => {
    const {contacts} = useContext(ContactContext)
    return (
        <div className="list">
            {
                contacts.map(
                    (contact) => {
                        return <ContactItem 
                            key={contact.id}
                            //id={contact.id}
                            name={contact.name}
                            //last_time_connected={contact.last_time_connected}
                            img={contact.img}
                            last_message={contact.last_message}
                            unread_messages={contact.unread_messages}
                        />
                    }
                )
            }
        </div>
    )
}

export default ContactList