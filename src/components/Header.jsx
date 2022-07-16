import {useState} from 'react'
import styled from '@emotion/styled'

const ContenidoHeader = styled.div`
  border-radius: 2rem;
  padding: 0 5rem;
  margin: 0 2rem;
  max-height: 20rem;
`;
const Heading = styled.h1`
  font-family: var(--font-principal);
  color: var(--negro);
  font-weight: 700;
  font-size: 34px;
  span {
    color: var(--azul-claro)
  }
`;

const Header = () => {

  const [ver, setVer] = useState(false)

  return (
    <ContenidoHeader>
      <Heading><span>Formulario</span> De Contacto</Heading>
      
    </ContenidoHeader>
  )
}

export default Header