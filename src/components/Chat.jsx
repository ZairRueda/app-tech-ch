import {useState} from 'react'
import styled from '@emotion/styled'
import Nombre from './Nombre';
import FechaNacimiento from './FechaNacimiento';
import Contacto from './Contacto';
import { generarId } from '../helpers';
import Completo from '../tools/Completo';
import { element } from 'prop-types';
import Message from '../tools/Message'

const ContenidoChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1px;
  padding: 1rem;
  margin: 1rem;
  background-color: var(--azul-claro);
  height: 95%;
  scroll-behavior: auto;
`;
const Contenido = styled.div`
  
  text-align: right;
  padding: 5rem;
  background-color: var(--gris-claro);
  overflow-y: scroll;
  max-height: 100vh;
  
`;
const BlockChat = styled.form`
  align-items: left;
  padding: 2rem;
  margin-left: 20%;
  margin-bottom: 1rem;
  border: 1px solid #828282;
  border-radius: 2rem;

  input[type="submit"] {
    background-color: #5773ff;
    color: #fff;
    border:none;
    border-radius: 2px;
    padding: 1rem;

    :hover {
      cursor: pointer;
    }
  }
`;
const InputMessage = styled.input`
  width: 100%;
  border: none;
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: white;
  color: var(--gris-oscuro);

  :focus-visible {
    outline: var(--scroll-bar-color) auto 1px;
  }
`;
const ActualData = styled.div`
  color: #6a6a6a;
  margin: 0 1rem;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #d3d3d3;
  margin-bottom: 2rem;
  font-weight: bold;
`;
const Pregunta = styled.p`
  text-align: center;
  color: var(--gris-oscuro);
`;
const BotonIniciar = styled.button`
  background-color: #3053ff;
  color: white;
  padding: 2rem 6rem;
  margin: 10px auto;
  border: none;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

const Chat = ({usuario,setUsuario,usurarios,setUsuarios,objCompleto}) => {

  const [nombreCompleto, setNombreCompleto] = useState([])
  const [fechaCompleta, setFechaCompleta] = useState([])
  const [contactoCompleto, setContactoCompleto] = useState([])

  const [message, setMessage] = useState(false)

  const handleClick = (e) => {
      e.preventDefault();
    if (nombreCompleto.length > 0 && fechaCompleta.length && contactoCompleto.length > 0) {
      setMessage(false)
      const objetoCompleto = { 
        nombreCompleto,
        fechaCompleta,
        contactoCompleto
      }
      objetoCompleto.idx = generarId()
      setUsuario([objetoCompleto])
    } else {
      setMessage(true)

      setTimeout(() => {
        setMessage(false)
      }, 3000);
    }
      
  }

  return (
    <ContenidoChat>
      <Contenido>

        <Nombre
          // Estilos
          BlockChat={BlockChat}
          InputMessage={InputMessage}
          ActualData={ActualData}
          Pregunta={Pregunta}
          // Variables
          usuario={usuario}
          setUsuario={setUsuario}
          nombreCompleto={nombreCompleto}
          setNombreCompleto={setNombreCompleto}
        />

        {nombreCompleto.length ?
       
          <FechaNacimiento
            // Estilos
            BlockChat={BlockChat}
            InputMessage={InputMessage}
            ActualData={ActualData}
            Pregunta={Pregunta}
            // Variables
            usuario={usuario}
            setUsuario={setUsuario}
            fechaCompleta={fechaCompleta}
            setFechaCompleta={setFechaCompleta}
          /> 
          : ''
        }

        {fechaCompleta.length ?

          
          <Contacto
            // Estilos
            BlockChat={BlockChat}
            InputMessage={InputMessage}
            ActualData={ActualData}
            Pregunta={Pregunta}
            // Varianbles
            usuario={usuario}
            setUsuario={setUsuario}
            contactoCompleto={contactoCompleto}
            setContactoCompleto={setContactoCompleto}
          /> : ''

        }
      </Contenido>

      <BotonIniciar 
        type="button"
        onClick={handleClick}
        value="Iniciar"
      > Iniciar </BotonIniciar>

      {usuario.length ?
        <Completo
          usuario={usuario}
          ActualData={ActualData}
        />
        : ''
      }

      {message ? 
        <Message
          mensaje={"Aun no has agregado nada"}
        />
        : ''
      }

    </ContenidoChat>
  )
}

export default Chat




