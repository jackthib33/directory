import React from 'react';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
//import logo from './Scruminc-Japan_Logo-2.png';
import { withStyles } from '@material-ui/core/styles';
import styles from './trainerStyle';

function Provider({data,classes}) {
const {name,badge,discription,logo,url}= data 
 console.log("provider",data)
 console.log(classes);
    return (
  
    <div className={classes.ProviderBox}>
    <img src={logo} className={classes.providerLogo}/>
    <h1>{name}</h1>
    <p>{discription}</p>
    <Button className={classes.mySiteProvider} variant="outlined" color="default" href={url}>My Site</Button>
    </div>
    )
  }
  
  export default withStyles(styles)(Provider);