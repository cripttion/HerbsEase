import React, { createContext, useContext, useState } from 'react';

// Create a context for login management
const LoginContext = createContext();

// Custom hook to use the login state and functions
export const useLoginList = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginList must be used within a LoginProvider');
  }
  return context;
};

// Login provider component to wrap your application
export const LoginManager = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
