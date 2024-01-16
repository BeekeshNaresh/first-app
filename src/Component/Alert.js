import React, { useState } from 'react'

export default function Alert(props) {
    
    const message=(words)=>{
       return words.charAt(0).toUpperCase()+ words.slice(1);


    }

    
    
  return (
   props.alert && 
   <div className={`alert  alert-${props.alert.type}`} role="alert">
   <strong> {message(props.alert.type)}</strong> {props.alert.msg}
  </div>
  )
}
