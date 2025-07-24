import React from 'react'
import { Link } from "react-router"
import './HomeScreen.css'

export default function HomeScreen() {
    
    return (
      <div>
        <img className='wa-img' src='https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png' alt='whatsApp-img' />
        <h1 className='title'>Bienvenido al servicio de WhatsApp Web</h1>
        <Link className='link' to={"/contacts"}>
          <button className='button-start'>Usar en la web</button>
        </Link>
      </div>
    )
}
