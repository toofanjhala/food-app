import React from 'react'
import classes from "./Mealitem.module.css"
export const Mealitem = (props) => {

    const price=`$${props.price.toFixed(2)}`
  return ( <li className={classes.meal}>
         <div>
         <h3>{props.name}</h3>
         <div className={classes.description}>{props.description}</div>
         <div>{price}</div>
         </div>

    </li>
    
  )
}
