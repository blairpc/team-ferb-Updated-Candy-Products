import React from "react";
import Product from "./Product";
import  './ProductHome.css';

function ProductCookies() {    
    return (  
      <div className="home__row">
<Product 
   id="52"
   title= "Christmas Sugar Cookies 24 count"
   price= {32.75}
   rating= {4}
   image= "./images/hard candy/Christmas_Sugar_Cookies-removebg-preview.png"
    />
     
 <Product 
   id="54"
   title= "Christmas Candy Cane Cookies 2 lb bag"
   price= {26.95}
   rating= {5}
   image= "./images/hard candy/Christmas-Cndy-Cane-Cookies-removebg-preview.png"
    />  
 
<Product 
    id="59"
    title= "Dark Chocolate M&M Cookies 15 count"
    price= {11.98}
    rating= {5}
    image= "./images/hard candy/Dark_Chocolate_M_M_Cookies-removebg-preview.png"
     />

 <Product 
   id="63"
   title= "Gingerbread Cookies 24 count"
   price= {14.75}
   rating= {4}
   image= "./images/hard candy/Gingerbread_Cookies-removebg-preview.png"
    />
 <Product 
    id="92"
    title= "Peanut Butter Cookies 2 lb bag"
    price= {5.99}
    rating= {5}
    image= "./images/hard candy/Peanut_Butter_Cookies-removebg-preview.png"
     />  
     </div>
)}

export default ProductCookies;