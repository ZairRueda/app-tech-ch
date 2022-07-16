import React from 'react'

const Actual = ({ActualData,texto}) => {
  let text = ""
  let completoActual = texto.forEach( valor => { 
    text+=`${valor} ` 
  })
  return (
    <ActualData>
      <p>{text}</p>
    </ActualData>
  )
}

export default Actual