import React from "react";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import "./Subtotal.css";
function Subtotal() {

const getCartTotal = (cart) =>
cart.reduce((amount,item) => item.price + amount, 0);

const [{cart}, dispatch] =useStateValue();

    return(
       <div className="subtotal">

         <CurrencyFormat 
           renderText ={(value) =>(
             <p>
               Subtotal({cart.length} items) : <strong>{`${value}`}</strong>
             </p>
           )
          }
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
         />

      <button className= "checkout__button">Proceed to Checkout</button>
    </div>
    

    )
}

export default Subtotal