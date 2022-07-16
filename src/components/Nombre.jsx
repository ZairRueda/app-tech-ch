import {useState} from 'react'
import { generarId } from '../helpers'
import Actual from '../tools/Actual'
import Message from '../tools/Message'


const Nombre = ({BlockChat,InputMessage,ActualData,Pregunta,nombreCompleto,setNombreCompleto}) => {

  const [nombre, setNombre] = useState('')
  const [segundoN, setSegundoN] = useState('')
  const [apellidop, setApellidop] = useState('')
  const [apellidom, setApellidom] = useState('')

  const [message, setMessage] = useState(false)
  
  // Validar Formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length > 0 || segundoN.length > 0 && apellidop.length > 0 || apellidom.length > 0) {
      setMessage(false)
      const objetoNombreCompleto = { 
        nombre,
        segundoN,
        apellidop,
        apellidom
      }
      objetoNombreCompleto.idx = generarId()
      setNombreCompleto([objetoNombreCompleto])
    } else {
      setMessage(true)

      setTimeout(() => {
        setMessage(false)
      }, 3000);
    }
  }

  
  return (
    <>
      <BlockChat 
        onSubmit={handleSubmit}
      >
        <Pregunta>¿Cuál es tu nombre?</Pregunta>

        <InputMessage
          id="nombre"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={ (e) => setNombre(e.target.value)}
        />
        <InputMessage
          id="segundoN"
          type="text"
          placeholder="Segundo Nombre"
          value={segundoN}
          onChange={ (e) => setSegundoN(e.target.value)}
        />
        <InputMessage
          id="apellidop"
          type="text"
          placeholder="Apellido Paterno"
          value={apellidop}
          onChange={ (e) => setApellidop(e.target.value)}
        />
        <InputMessage
          id="apellidom"
          type="text"
          placeholder="Apellido Materno"
          value={apellidom}
          onChange={ (e) => setApellidom(e.target.value)}
        />

        <input 
          type="submit" 
          value="Enviar"
        />
      </BlockChat>

      {nombreCompleto.length ? 
        <Actual
          // Estilo
          ActualData={ActualData}

          // Variables actuales
          texto={[`Nombre: ${nombre}`, segundoN, apellidop, apellidom]}

        /> : ''
      }

      {message ? 
        <Message
          mensaje={"Hace falta infromacion, agrega almenos un nombre y apellido"}
        />
        : ''
      }
      
    </>
  )
}

export default Nombre