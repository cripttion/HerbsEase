import React, { createContext, useContext, useState } from 'react';

// Create a context
const WhistListContext = createContext();

// Create a context provider component
export function WhistlistManagement({ children }) {
    const [wishlist, setWishlist] = useState([]);        



  return (
    <WhistListContext.Provider value={{ wishlist,setWishlist }}>
      {children}
    </WhistListContext.Provider>
  );
}

// Custom hook for consuming the context
export function useWhishList() {
  return useContext(WhistListContext);
}
