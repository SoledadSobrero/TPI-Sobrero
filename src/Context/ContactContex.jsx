import { createContext, useState } from "react";

export const ContactContext = createContext({
    contacts: []
})

const ContactContextProvider = ({children}) => {
    const [contacts, setContacs] = useState(
        [
            {
                id: 1,
                name: 'Esteban',
                last_time_connected: '14:19',
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VDEnL92U2nevssnrqIMZcvOguRvb17Ek7Q&s",
                last_message: {
                    id: 1,
                    text: 'Cómo estuvo tu día?'
                },
                unread_messages: 1
            },
            {
                id: 2,
                name: 'Clara',
                last_time_connected: '14:19',
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfy0rGzxkfizC3Ic0BYy50Mr6fuG64M_rFgg&s",
                last_message: {
                    id: 2,
                    text: 'Cómo estuvo tu día?'
                },
                unread_messages: 3
            },
            {
                id: 3,
                name: 'Danisa',
                last_time_connected: '14:19',
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYFuA8WBBIAvQWabLBD4tskBReFvrl4THCQ&s",
                last_message: {
                    id: 3,
                    text: 'Cómo estuvo tu día?'
                },
                unread_messages: 0
            },
            {
                id: 4,
                name: 'Pedro',
                last_time_connected: '14:19',
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9NOKsWGLcUmPpFMOi6k8r-hzCMOojWRUxw&s",
                last_message: {
                    id: 4,
                    text: 'Cómo estuvo tu día?'
                },
                unread_messages: 1
            },
            {
                id: 5,
                name: 'Lorenzo',
                last_time_connected: '14:19',
                img: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/07/25/5fa43c9755611.jpeg",
                last_message: {
                    id: 5,
                    text: 'Cómo estuvo tu día?'
                },
                unread_messages: 0
            },
            {
                id: 6,
                name: 'Gina',
                last_time_connected: '14:19',
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLqMgM26UAdt-z7FqdE_T0jUh_iqtAbq_fw&s",
                last_message: {
                    id: 6,
                    text: 'Cómo estuvo tu día?'
                },
                unread_messages: 2
            },
            {
                id: 7,
                name: 'Mariana',
                last_time_connected: '14:19',
                img: "https://plugins-media.makeupar.com/smb/blog/post/2023-12-08/b21327d2-8149-4938-baf6-07fc5e142a8f.jpg",
                last_message: {
                    id: 7,
                    text: 'Cómo estuvo tu día?'
                },
                unread_messages: 4
            }
        ]
    )

    return (
        <ContactContext.Provider
            value={
                {
                    contacts: contacts
                }
            }
        >
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider