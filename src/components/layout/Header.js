import React from 'react'
import classes from "./header.module.css"
import { Cartbutton } from './Carticon_button'

export const Header = (props) => {
    return (
        <React.Fragment >
            <header className={classes.header}>
                <h2>Food Factory</h2>
               <Cartbutton onclick={props.onclick}></Cartbutton>
            </header>
            <div className={classes.mainimage}>
                <img src="https://as2.ftcdn.net/v2/jpg/02/86/17/89/1000_F_286178925_8zk89O9uC5JJVPvqhvBMUpaRxp8AFXzD.jpg" alt="not found"></img>
            </div>
        </React.Fragment>
    )
}
