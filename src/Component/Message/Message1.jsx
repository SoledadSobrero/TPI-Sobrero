import React from 'react'

export default function Message({emisor, hora, id, texto, status}) {
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
                <span>hora</span>
                <span>✔✔</span>
                <button>Eliminar</button>
            </div>
        </div>
    )
}
