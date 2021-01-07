import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import candytype from "./static/candytype";
import useWindowPosition from "./hook/useWindowPosition";


const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: "100vh",
        display:"flex",
        justifycontent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]:{
         flexDirection:"column",
        },
    },
}));
export default function () {
const classes = useStyles();
const checked = useWindowPosition("catergoryheader");
return (
  <div className={classes.root} id="candy-to-type">
    <ImageCard candy={candytype[1]} checked={checked}/>
    <ImageCard candy={candytype[0]} checked={checked}/>
    <ImageCard candy={candytype[2]} checked={checked}/>
</div>
);

}

      

   

  