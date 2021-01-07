import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaProductHunt} from "react-icons/fa";
import "./home.css"


function Home() {
    return(
      <nav>
        
      <div className="navigation">
      <ul>
        <li>
          <a href="/home">
            <span className="icon">< FaHome /></span>
            <span className="title">Home</span>
          </a>
        </li>
        <li>
          <a href="/signin">
            <span className="icon">< FaSignInAlt /></span>
            <span className="title">Log in</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">< FaProductHunt /></span>
            <span className="title">Products</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">< FaShoppingCart /></span>
            <span className="title">Cart</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">< FaEnvelope /></span>
            <span className="title">Contact Us</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">< FaSignOutAlt /></span>
            <span className="title">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
    <div>
    <div className="background"><img src="/images/candy.jpg"/></div>
        
      </div>  
        <footer>
  <p>Cup Of Javascript | Copyright &copy; 2020</p>
</footer>
      </nav>

    )
}

export default Home;