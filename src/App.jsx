import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Chat from './components/Chat'
import {gql, useQuery, useMutation} from '@apollo/client'


const Conteiner = styled.div`
  max-width: 900px;
  max-height: 1200px;
  margin: 0 auto;
  width: 90%;
  display: grid;
  column-gap: 4rem;
`;

const ALL_PERSON = gql`
  query {
    getAllUsers{
      nombre,
      segundoNombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaDeNacimiento,
      correo,
      telefono
    }
  }
`;

const CREATE_USER = gql`
mutation CreateUser($nombre: String!, $segundoNombre: String!, $apellidoPaterno: String!, $apellidoMaterno: String!, $fechaDeNacimiento: String!, $correo: String!, $telefono: String!) {
  createUser(
    nombre: $nombre,
    segundoNombre: $segundoNombre,
    apellidoPaterno: $apellidoPaterno,
    apellidoMaterno: $apellidoMaterno,
    fechaDeNacimiento: $fechaDeNacimiento,
    correo: $correo,
    telefono: $telefono,
  ) {
    id,
    nombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaDeNacimiento,
    correo,
    telefono
  }
}
`

function App() {

  const [usuario, setUsuario] = useState([])

  const [usuarios, setUsuarios] = useState(
    JSON.parse(sessionStorage.getItem('objUsers')) ?? []
  )

  const [ createUser ] = useMutation(CREATE_USER)

  useEffect(() => {
    if (usuario.length > 0) {
      function sanitizeUsuarios(ary) {
        const {nombre, segundoN, apellidop, apellidom} = ary[0].nombreCompleto[0] 
        const {fecha} = ary[0].fechaCompleta[0] 
        const {correo, telefono} = ary[0].contactoCompleto[0] 
        const objDB = {
          nombre,
          segundoNombre: segundoN,
          apellidoPaterno: apellidop,
          apellidoMaterno: apellidom,
          fechaNaciminento: fecha,
          correo,
          telefono
        }

        sessionStorage.setItem("objDB", JSON.stringify(objDB));
        sessionStorage.setItem("objUsers", JSON.stringify([...usuarios, objDB]));

        const {segundoNombre, apellidoPaterno, apellidoMaterno, fechaDeNacimiento} = objDB;

        createUser({ variables : {nombre, segundoNombre, apellidoPaterno, apellidoMaterno, fechaDeNacimiento, correo, telefono}})
      }
      sanitizeUsuarios(usuario)
    }
  }, [usuario.length > 0])

  
  // Component Body
  return (
    <>
      <Conteiner>
        <Header 
        />
        <Chat
          usuario={usuario}
          setUsuario={setUsuario}
        />
      </Conteiner>

    </>
  )
}

export default App