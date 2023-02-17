import React, {useState}from "react";
import Meals from "./components/meals/Meal";
import { Header } from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import CardProvider from "./store/cardcontextprovider";


function App() {

  const [cartstatus,setcartstatus]=useState(false)
  

  function showcard(){
    setcartstatus(true)
  }

  function hidecard(){
    setcartstatus(false)
  }

  return (
    <CardProvider>
    { cartstatus && <Cart oncancel={hidecard}/>}
    <Header onclick={showcard}/>
    <main>
      <Meals/>
    </main>
    
    </CardProvider>
  );
}

export default App;
