import React from "react";
import Meals from "./components/meals/Meal";
import { Header } from "./components/layout/Header";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <React.Fragment>
    <Cart></Cart>
    <Header/>
    <main>
      <Meals/>
    </main>
    
    </React.Fragment>
  );
}

export default App;
