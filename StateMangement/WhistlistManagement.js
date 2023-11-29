import React, { createContext, useContext, useState } from 'react';

// Create a context
const WhistListContext = createContext();

// Create a context provider component
export function WhistlistManagement({ children }) {
    const [wishlist, setWishlist] = useState([]);  
    const [cartList, setCartList] = useState([]);        
      



  return (
    <WhistListContext.Provider value={{ wishlist,setWishlist,cartList,setCartList }}>
      {children}
    </WhistListContext.Provider>
  );
}

// Custom hook for consuming the context
export function useWhishList() {
  return useContext(WhistListContext);
}
