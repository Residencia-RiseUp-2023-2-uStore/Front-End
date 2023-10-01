import React from 'react'
import './InputType.css'
const InputType = props => {
  return (
      <input type={props.tipo}  id={props.id}  placeholder={props.name}/>
  )
}



export default InputType;