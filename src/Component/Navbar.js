import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  const thisStyle={color:`${props.style.color}`, backgroundColor: `${props.style.backgrond}`}
  return (
    <nav className="navbar navbar-expand-lg" style={thisStyle} >
    <div className="container-fluid"  style={thisStyle}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <div className="form-check form-switch ">
  <input className="form-check-input " onClick={props.togleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode=="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode=="dark"?"light":"dark"} Mode`}</label>
</div>
      <div className="form-check form-switch ">
  <input className="form-check-input " onClick={props.togleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode=="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode=="dark"?"light":"dark"} Mode`}</label>
</div>

    </div>
   
  </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string,
    mode:PropTypes.string
}
Navbar.defaultProps={
    title:"Navbar",
    mode:"light"
}

