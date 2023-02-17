import React ,{useContext} from 'react'
import CartIcon from '../cart/Carticon'
import classes from"./CartButton.module.css"
import Cardcontext from '../../store/card-context'



export const Cartbutton = (props) => {

  const data=useContext(Cardcontext)

const numberofitems=data.items.reduce((currentnum,item)=>{
  return  currentnum + item.amount
},0)

  return (
    <React.Fragment>
      <button 
      onClick={props.onclick}
      className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>your expense</span>
        <span className={classes.badge}>{numberofitems}</span>
      </button>
    </React.Fragment>
  )
}
