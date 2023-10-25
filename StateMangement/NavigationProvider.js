import React, { createContext, useContext, useState } from 'react';

// Create a context
const NavigationContext = createContext();

// Create a context provider component
export function NavigationProvider({ children }) {
  const [activePage, setActivePage] = useState('Home');

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <NavigationContext.Provider value={{ activePage, onPageChange: handlePageChange }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Custom hook for consuming the context
export function useNavigation() {
  return useContext(NavigationContext);
}
