import React from 'react';
import { Button } from '@material-ui/core';
import logo from './unnamed.jpeg';
import badge from './PO-Hardware-Badge.png'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './trainerStyle';
function Trainer(props) {


 console.log(props.badge)
 const classes= props.classes;
 console.log(classes);
    return (
  
<div className={classes.trainerBoxTwo}>

  
   <div className={classes.inline}>
    <div>
        <img src={logo} className={classes.trainerPic}/>
   
    </div>
    <div className={classes.trainerInfo}>
        <h1 className={classes.title}>Jack Thibodeau</h1>
        <p>Stomp 360 frozen chicken heads chain suck. Grab taco mitt shreddin bail steed stoked, park 360 free ride. Butter grunt moguls road rash schwag Bike Ski endo epic brain bucket stoked face shots bomb hole titanium presta.</p>
    </div>
    </div>
    <div className={classes.badgeBox}>
        <img src={badge} className={classes.badges}></img>
        <img src={badge} className={classes.badges}></img>
        <img src={badge} className={classes.badges}></img>
        <img src={badge} className={classes.badges}></img>
    </div>
    <Button className={classes.mySite} variant="outlined" color="default" href="https://www.nottootruestore.com/s/shop">My Site</Button>
</div>
    )
  }
 export default withStyles(styles)(Trainer);
  