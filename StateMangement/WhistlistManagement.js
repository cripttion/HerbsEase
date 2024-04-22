import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Create a context
const WishlistContext = createContext();

// Create a context provider component
export function WishlistManagement({ children }) {

  const [wishlist, setWishlist] = useState([]);
  const [cartList, setCartList] = useState([]);
  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    AsyncStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
    
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    setWishlist(updatedWishlist);
    AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cartList.find((item) => item._id === product._id);
    if (existingProduct) {
      const updatedCartList = cartList.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartList(updatedCartList);
      AsyncStorage.setItem('cartList', JSON.stringify(updatedCartList));
    } else {
      setCartList([...cartList, { ...product, quantity: 1 }]);
      AsyncStorage.setItem('cartList', JSON.stringify([...cartList, { ...product, quantity: 1 }]));
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const updatedCartList = cartList
      .map((item) =>
        item._id === product._id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove items with quantity zero
  
    setCartList(updatedCartList);
    AsyncStorage.setItem("cartList", JSON.stringify(updatedCartList));
  };
  const clearCart = () => {
    setCartList([]);
    AsyncStorage.setItem('cartList', JSON.stringify([]));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        cartList,
        addToCart,
        removeFromCart,
        clearCart
      }}>
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook for consuming the context
export function useWishlist() {
  return useContext(WishlistContext);
}
