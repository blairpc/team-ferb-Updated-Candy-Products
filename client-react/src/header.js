import React, {useEffect, useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
import { Link} from 'react-router-dom';
import "./header.css";



const useStyles = makeStyles((theme) =>({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Nunito", 
    },
   navbarTitle: {
   flexGrow: ".5",
},
colorText2: {
    color: "#5AFF3D",
 },
 colorText1: {
    color: "#E51E99",
 },
 container:{
    textAlign: "center", 
 },
 title:{
    color: "#ffffff",
    fontSize: "4.5rem",
 }
}));
   function Header() {
       const [{cart}, dispatch]= useStateValue();
       console.log("my cart", cart)

    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
      setChecked(true);
    }, [])
    return (
       
    <nav className= "Header">      
      <h2 className={classes.navbarTitle}>
        <span className={classes.colorText1}>Simply Sweet Candy </span> <span className={classes.colorText2}>Shop</span>
               </h2>    
      <div className= "header__search">
          <input type= "text" className= "header__searchInput" />
          <SearchIcon className= "header__searchIcon" />
      </div>
      <div className="header__nav">
      {/* 1st link */}
      <Link to="/" className ="header__link">
          <div className ="header__option">
              <span className="header__optionLineOne">Hello, User</span>
              <span className="header__optionLineTwo">Sign Out</span>
          </div>
      </Link>
       {/* 2nd link */}
      <Link to="/" className ="header__link">
          <div className ="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">Orders</span>
          </div>
      </Link>
      </div>
      {/* basket icon with number */}
      <Link to = "./Checkout" className="header__link">
          <div className="header__optionCart">
              <ShoppingCartIcon/>
              {/* number of items in the cart */}
              <span className="header_optionLineTwo header__productCount">{cart.length}</span>
          </div>
      </Link>
         
    </nav>
    
    );
};

export default Header;