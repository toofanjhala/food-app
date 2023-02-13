import React from "react";
import Meals from "./components/meals/Meal";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <React.Fragment>
    <Header/>
    <main>
      <Meals/>
    </main>
    
    </React.Fragment>
  );
}

export default App;
