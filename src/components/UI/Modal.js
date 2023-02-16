import React from 'react'
import classes from "./Modal.module.css"
import ReactDOM from 'react-dom'
const Overlays=(props)=>{
    return (
    <div className={classes.modal}> 
    <div className={classes.content}>{props.children}</div>
    </div>
    )
}

const Backdrop=(props)=>{
    return (
    <div className={classes.backdrop}> 

    </div>
    )
}

const portaladdress=document.getElementById("overlay")

export const Modal = (props) => {
  return (
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop/>,portaladdress)}
    {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>,portaladdress)}

    </React.Fragment>
  )
}
