// Import necessary modules and components
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { json } from 'stream/consumers';

// Define the shape of the CartContext
type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
  paymentIntent : string | null;
  handleSetPaymentIntent : (val : string | null) => void ;
};

// Create the CartContext
export const CartContext = createContext<CartContextType | null>(null);

// Define the props for CartContextProvider
interface CartContextProviderProps {
  [propName: string]: any;
}

// CartContextProvider component to provide cart functionality to its children
export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  // State to manage cart products, total quantity, and total amount
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);



  const [paymentIntent, setPaymentIntent] = useState <string | null>(null);


  // Load cart items from local storage on component mount
  useEffect(() => {
    const cartItems: any = localStorage.getItem('jShopCartItems');
      const cProducts: CartProductType[] = JSON.parse(cartItems);
      const jShopPaymentIntent: any = localStorage.getItem('jShopPaymentIntent');
      const paymentIntent : string | null = JSON.parse(jShopPaymentIntent);


      setCartProducts(cProducts);
      setPaymentIntent(paymentIntent);
  }, []);

  // Function to handle adding a product to the cart
  const handleAddProductToCart = useCallback((product: CartProductType) => {
    let updatedCart;
    setCartProducts((item) => {
      if (item) {
        updatedCart = [...item, product];
      } else {
        updatedCart = [product];
      }
      localStorage.setItem('jShopCartItems', JSON.stringify(cartProducts));
      toast.success('Product Added to Cart');
      return updatedCart;
    });
  }, []);

  // Function to handle removing a product from the cart
  const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
    if (cartProducts) {
      const filteredProducts = cartProducts.filter((item) => item.id !== product.id);

      setCartProducts(filteredProducts);
      toast.success('Product Removed');
      localStorage.setItem('jShopCartItems', JSON.stringify(filteredProducts));
    }
  }, [cartProducts]);

  // Function to handle increasing quantity of a product in the cart
  const handleCartQtyIncrease = useCallback((product: CartProductType) => {
    let updatedCart;

    if (product.quantity === 99) {
      toast.error('Ooops! Maximum Reached');
      return;
    }

    if (cartProducts) {
      updatedCart = [...cartProducts];

      const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity;
      }

      setCartProducts(updatedCart);
      localStorage.setItem('jShopCartItems', JSON.stringify(updatedCart));
    }
  }, [cartProducts]);

  // Function to handle decreasing quantity of a product in the cart
  const handleCartQtyDecrease = useCallback((product: CartProductType) => {
    let updatedCart;

    if (product.quantity === 1) {
      toast.error('Ooops! Minimum Reached');
      return;
    }

    if (cartProducts) {
      updatedCart = [...cartProducts];

      const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity;
      }

      setCartProducts(updatedCart);
      localStorage.setItem('jShopCartItems', JSON.stringify(updatedCart));
    }
  }, [cartProducts]);

  // Function to handle clearing the entire cart
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem('jShopCartItems', JSON.stringify(null));
  }, [setCartProducts, setCartTotalQty]);


  const handleSetPaymentIntent = useCallback((val : string | null) => {
    setPaymentIntent(val);
    localStorage.setItem("jShopPaymentIntent", JSON.stringify(val));
  },[paymentIntent])

  // Function to calculate total quantity and amount in the cart
  const calculateTotal = () => {
    if (cartProducts) {
      const { total, qty } = cartProducts.reduce(
        (acc, item) => {
          const itemTotal = item.price * item.quantity;
          acc.total += itemTotal;
          acc.qty += item.quantity;
          return acc;
        },
        {
          total: 0,
          qty: 0,
        }
      );

      setCartTotalQty(qty);
      setCartTotalAmount(total);
    }
  };

  // Calculate total on cart product changes
  useEffect(() => {
    calculateTotal();
  }, [cartProducts]);

  // Value to be provided by the CartContext
  const value: CartContextType = {
    cartTotalQty,
    cartProducts,
    cartTotalAmount,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
    paymentIntent,
    handleSetPaymentIntent,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext
  (CartContext);

  if (context === null) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return context;
};
