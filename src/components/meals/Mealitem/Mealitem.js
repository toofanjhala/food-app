import React from 'react'
import classes from "./Mealitem.module.css"
import Mealform from './Mealform'
export const Mealitem = (props) => {

    const price=`₹${props.price.toFixed(2)}`
  return ( <li className={classes.meal}>
         <div>
         <h3>{props.name}</h3>
         <div className={classes.description}>{props.description}</div>
         <div className={classes.price}>{price}</div>
         </div> 
         <Mealform/>

    </li>
    
  )
}
