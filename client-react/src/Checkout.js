import React from "react";
import Subtotal from "./Subtotal";
import Header from "./header";
import ProductCart from "./ProductCart";
import {useStateValue} from "./StateProvider";
import "./Checkout.css";

function Checkout() {

const[{cart}] = useStateValue();

    return (  
      <div className="checkout">
          <div className="checkout__left">
            {
              cart.length === 0 ? (
              <div>
                <h2 className="checkout__title">Your shopping basket is empty. </h2>
                <p>You have no items in your basket. Buy one.</p>
            </div>
              ) : (
                 <div>
                   <h2 className="shoppingcarttitle">Items in the Shopping Cart </h2> 
                   {
                     cart.map(item => (
                       <ProductCart
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                     />
                     ))
                   }
                   
                 </div>

              )
          }  
          </div>
          {
            cart.length > 0 && (
            <div className= "checkout__right">
            <Subtotal/>
            </div>
    )
          }
       </div> 
    )
}     

export default Checkout
