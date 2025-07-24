import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessageContext'

export default function NewMessageForm() {
    const {addNewMessage} = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = ''
    }
    return (
    <form onSubmit={handleSubmitNewMessage}>
        <div>
            <label htmlFor="text">Nuevo mensaje:</label>
            <textarea name="text" id="text" minLength={5} required></textarea>
        </div>
        <button type='submit'>Enviar mensaje</button>
    </form>
    )
}
