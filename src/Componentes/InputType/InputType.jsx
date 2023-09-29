import React from 'react'
import './InputType.css'
const InputType = props => {
  return (
    <div>
      <input type={props.tipo}  id={props.id}  placeholder={props.name}/>

    </div>
  )
}



export default InputType;