import React from 'react'
import './InputType.css'
import styled from "styled-components";



const InputType = props => {
  return (
      <input type={props.tipo}  id={props.id}  placeholder={props.name}/>
  )
}



export default InputType;