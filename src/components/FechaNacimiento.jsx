import {useState} from 'react'
import { generarId } from '../helpers';
import Actual from '../tools/Actual';
import Message from '../tools/Message';

const FechaNacimiento = ({BlockChat,InputMessage,ActualData, Pregunta, fechaCompleta, setFechaCompleta}) => {

  const [fecha, setFecha] = useState('')
  
  const [message, setMessage] = useState(false) 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(fecha.length > 0) {
      setMessage(false)
      const objetoFechaCompleta = { 
        fecha
      }
      objetoFechaCompleta.idx = generarId()
      setFechaCompleta([objetoFechaCompleta]) 
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
          id="fecha"
          type="date"
          placeholder="fecha"
          value={fecha}
          onChange={ (e) => setFecha(e.target.value)}
        />
        <input 
          type="submit" 
          value="Enviar"
        />
      </BlockChat>

      {fechaCompleta.length ?
        <Actual
          // Estilo
          ActualData={ActualData}
          // Varaibles actuales
          texto={[`Fecha de Nacimento: ${fecha}`]}
        /> : ''
      }

      {message ? 
        <Message
          mensaje={"Hace falta infromacion, agrega una fecha"}
        />
        : ''
      }
    </>
  )
}

export default FechaNacimiento

  


