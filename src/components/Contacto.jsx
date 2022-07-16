import {useState} from 'react'
import { generarId } from '../helpers'
import Actual from '../tools/Actual'
import Message from '../tools/Message';

const Contacto = ({BlockChat,InputMessage,ActualData,Pregunta,contactoCompleto,setContactoCompleto}) => {
  
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')

  const [message, setMessage] = useState(false) 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(correo.length > 0 && telefono.length > 9) {

      setMessage(false)
      const objetoContactoCompleto = { 
        correo,
        telefono
      }
      objetoContactoCompleto.idx = generarId()
      setContactoCompleto([objetoContactoCompleto])

    } else {
      setMessage(true)

      setTimeout(() => {
        setMessage(false)
      }, 3000);
    }
  }

  return (
    <>
      <BlockChat onSubmit={handleSubmit}>
        <Pregunta>¿Cuál es tu fecha de nacimiento?</Pregunta>
        <InputMessage
          id="correo"
          type="email"
          placeholder="Tu Correo"
          value={correo}
          onChange={ (e) => setCorreo(e.target.value)}
        />
        <InputMessage
          id="fecha"
          type="phone"
          placeholder="Tu telefono"
          value={telefono}
          onChange={ (e) => setTelefono(e.target.value)}
        />
        <input 
          type="submit" 
          value="Enviar"
        />
      </BlockChat>
      {contactoCompleto.length ?
        <Actual
          // Estilo
          ActualData={ActualData}
          // Varaibles actuales
          texto={[`Contacto : ${correo}`, " ", `${telefono}`]}
        /> : ''
      }

      {message ? 
        <Message
          mensaje={"Hace falta infromacion, agrega un correo y una telefono"}
        />
        : ''
      }
    </>
  )
}

export default Contacto



  


