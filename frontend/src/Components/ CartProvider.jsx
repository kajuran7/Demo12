// // CartProvider.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create a context for the cart
// const CartContext = createContext();

// export const CartProviderWrapper = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const initialCartCount = JSON.parse(localStorage.getItem("cartDesigns"))?.length || 0;
//     setCartCount(initialCartCount);
//   }, []);

//   const updateCartCount = newCount => {
//     setCartCount(newCount);
//   };

//   return (
//     // Provide the cart count and update function to the components
//     <CartContext.Provider value={{ cartCount, updateCartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Create a custom hook for components to access the cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProviderWrapper');
//   }
//   return context;
// };
