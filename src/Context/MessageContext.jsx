import { createContext, useState} from "react";

export const MessagesContext = createContext(
    {
        messages: [],
        addNewMessage: (text) => {},
        handleDeleteMessage: (id_message) => {}
    }
)

const MessagesContextProvider = ({children}) => {
    const [messages, setMessages] = useState(
    [
        {
        emisor: 'YO',
        hora: '23:10',
        id: 1,
        texto: 'Hola que tal?',
        status: 'visto'
        },
        {
        emisor: 'USUARIO',
        hora: '23:11',
        id: 2,
        texto: 'Si, hoy aprendí estados',
        status: 'visto'
        },
        {
        emisor: 'YO',
        hora: '23:12',
        id: 3,
        texto: 'Eso que significa 🤓?',
        status: 'no-visto'
        },
        {
        emisor: 'YO',
        hora: '23:13',
        id: 4,
        texto: 'Estás ahí?',
        status: 'no-recibido'
        }
    ])

    const handleDeleteMessage = (id_message) => {
        const updatedMessageList = []
        for (const message of messages) {
            if (message.id !== id_message) {
                updatedMessageList.push(message)
            }
        }
        setMessages(updatedMessageList)
    }

    const addNewMessage = (text) => {
    const new_message = {emisor: 'YO', hora: '23:13', texto: text, status: 'no-recibido', id: messages.length + 1}
    const clon_messages = [...messages]
    clon_messages.push(new_message)
    setMessages(clon_messages)
    }
        return (
            <MessagesContext.Provider
                value={
                    {
                        messages: messages,
                        addNewMessage: addNewMessage,
                        handleDeleteMessage:handleDeleteMessage
                    }
                }
            >
                {children}
            </MessagesContext.Provider>
        )
    }

export default MessagesContextProvider