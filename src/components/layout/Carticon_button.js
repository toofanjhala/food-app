import React from 'react'
import CartIcon from '../cart/Carticon'
import classes from"./CartButton.module.css"
export const Cartbutton = (props) => {
  return (
    <React.Fragment>
      <button 
      onClick={props.onclick}
      className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>your expense</span>
        <span className={classes.badge}>30</span>
      </button>
    </React.Fragment>
  )
}
