import React, { useState } from 'react'
import { useParams } from 'react-router'
import contacts from '../../data/contacts';

const ChatScreen = () => {
    const {contact_id} = useParams();
    let contact_selected = null
    for(const contact of contacts){
        if(Number(contact.id) === Number(contact_id)){
            contact_selected = contact
        }
    }
    const [messages, setMessages] = useState(contact_selected.messages)

    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        const message = e.target.message.value
        const newMessage = {
            emisor: 'YO',
            hora: '23:12',
            id: messages.length + 1,
            texto: message,
            status: 'no-visto'
        }
        //Clonamos el array
        const new_messages = [...messages]
        //Añadimos el nuevo mensaje al array de mensajes clonado
        new_messages.push(newMessage)
        //Guardamos al clon como nuevo estado de mensajes
        setMessages(new_messages)
    }
    return (
        <div>
            {messages.map(message => {
                return (
                    <div key={message.id}>
                        <p>{message.emisor}</p>
                        <p>{message.hora}</p>
                        <p>{message.texto}</p>
                        <p>{message.status}</p>
                        <hr/>
                    </div>
                )
            })}

            <form onSubmit={handleSubmitNewMessage}>
                <input type="text" placeholder='Escribe tu mensaje' id='message' name='message' />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default ChatScreen