"use client";
// Import the CartContextProvider from the custom hook 'useCart'
import { CartContextProvider } from "@/hooks/useCart";

// Define the props for the CartProvider component
interface CartProviderProps {
    children: React.ReactNode; // 'children' prop to wrap child components
}

// Define the CartProvider component
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    // Render the CartContextProvider and pass the 'children' prop
    return <CartContextProvider>{children}</CartContextProvider>;
}

// Export the CartProvider component as the default export
export default CartProvider;
