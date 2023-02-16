import React, {useState}from "react";
import Meals from "./components/meals/Meal";
import { Header } from "./components/layout/Header";
import Cart from "./components/cart/Cart";


function App() {

  const [cartstatus,setcartstatus]=useState(false)
  

  function showcard(){
    setcartstatus(true)
  }

  function hidecard(){
    setcartstatus(false)
  }

  return (
    <React.Fragment>
    { cartstatus && <Cart oncancel={hidecard}/>}
    <Header onclick={showcard}/>
    <main>
      <Meals/>
    </main>
    
    </React.Fragment>
  );
}

export default App;
