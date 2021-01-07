import React from "react";
import "./App.css";
import Home from "./Home";
import ProductChocolate from "./ProductChocolate";
import ProductCandy from "./ProductCandy";
import ProductCookies from "./ProductCookies";
import Header from "./header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import CatergoryHeader from "./CatergoryHeader";
import Catergory from "./Catergory";
import Checkout from "./Checkout";
import "./header.css";


function App() {
 
  return (  
    <Router> 

      <div className="App">
      <Switch>
      <Route exact path="/Checkout" component={Checkout} />  
            
         <Route path="/Login">
          <Login/>
        </Route>
            <Route path="/CatergoryHeader">
           <Header/>
           <CatergoryHeader/>
           <Catergory/>
        </Route>       
        <Route path="/productChocolate">
          <Header/>        
          <ProductChocolate/>
        </Route>
        <Route path="/productCandy">
          <Header/>         
          <ProductCandy/>
        </Route>
        <Route path="/productCookies">
          <Header/>
          <ProductCookies/>
         </Route>   
        <Route path="/Home">
          <Header/>
          <Home/>
          </Route>  
      </Switch>
       
   </div> 
     </Router>   
     
  );
}


export default App;