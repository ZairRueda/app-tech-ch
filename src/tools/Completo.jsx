import React from 'react'

const Completo = ({usuario, ActualData}) => {
  const {nombre, segundoN, apellidop, apellidom} = usuario[0].nombreCompleto[0]
  const {fecha} = usuario[0].fechaCompleta[0]
  const {correo, telefono} = usuario[0].contactoCompleto[0] 
  return (
    <ActualData>
      <p>Fecha de Nacimiento: <span>{fecha}</span></p>
      <p>Correo electrónico: <span>{correo}</span></p>
      <p>Telefono celular: <span>{telefono}</span></p>
      <p>Nombre: <span>{`${nombre} ${segundoN} ${apellidop} ${apellidom}`}</span></p>
    </ActualData>
  )
}

export default Completo