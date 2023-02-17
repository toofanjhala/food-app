import React from "react";



const Cardcontext=React.createContext({ 
      items:[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }],
      totalamount:0,
      addItem : (items)=>{},
      removeItem:(id)=>{}
})
   

export default Cardcontext