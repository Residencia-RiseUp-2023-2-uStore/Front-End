import React from 'react';
import "./IconName.css";

const IconName = (props)=>{
  return(
    <a key = {props.key} className = "divIcon" href = {props.link}>
      <img src={props.linkImg} alt={props.altImg} className = {props.className}/>
      <p>{props.textoIcon}</p>
    </a>
  )
}

export default IconName;