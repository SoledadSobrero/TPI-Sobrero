import React from 'react'
import { ContactContext } from '../../Context/ContactContex'
import ContactList from '../../Component/ContactList/ContactList'

export default function ContactDetailsScreen() {
    const {contacts} = useContext(ContactContext)
    
    return (
        <div>
            <ContactList/>
            <ContactDetails/>
        </div>
    )
}
