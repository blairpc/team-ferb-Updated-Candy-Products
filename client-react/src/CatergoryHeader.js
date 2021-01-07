import React, {useEffect, useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import { Collapse, IconButton, } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) =>({
   root: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     height: "100vh",
     fontFamily: "Nunito", 
    },
    colorText: {
       color: "#5AFF3D",
    },
    colorText2: {
       color: "#E51E99",
    },
    container:{
       textAlign: "center", 
    },
    title:{
       color:"#fff",
       fontSize: "4.5rem",
    },
    goDown:{
       color: "#5AFF3D", 
       fontSize: "4rem",      
    
 
   }
}));
   export default function CatergoryHeader() {
     const classes = useStyles();
     const [checked, setChecked] = useState(false);
     useEffect(()=>{
       setChecked(true);
     }, [])
     return (
        <div className={classes.root} id="catergoryheader">
         <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} 
            collapsedHeight={50}
            >
            <div className={classes.container}>
               <h1 className={classes.title}>
               <span className={classes.colorText2}> Welcome to</span><br />
                  <span className={classes.colorText}>Simply Sweet</span>
               </h1>
               <Scroll to="candy-to-type" smooth={true}>
               <IconButton>
                  <ExpandMoreIcon className={classes.goDown} />
               </IconButton>
               </Scroll>
            </div>
            </Collapse>
     </div>
     );
   }