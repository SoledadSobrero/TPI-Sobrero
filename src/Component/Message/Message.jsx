import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessageContext'

export default function Message({emisor, hora, id, texto, status}) {

    const {handleDeleteMessage} = useContext(MessagesContext)

    const classNames = {
        message: 'chat-dialog'
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
    }
    return (
        <div className={classNames.message}> 
            <span>{texto}</span>
            <div>
                <span>{hora}</span>
                <span>✔✔</span>
                <button onClick={() => {handleDeleteMessage(id)}}>Eliminar</button>
            </div>
        </div>
    )
}
