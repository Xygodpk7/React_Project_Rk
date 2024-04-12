// Import necessary modules and dependencies
"use client"; // Using the 'client' directive to run this file only on the client-side
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";
import { SafeUser } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";

interface CartClientProps{
    currentUser : SafeUser | null
}

// Functional component for the Cart page
const CartClient : React.FC<CartClientProps>= ({currentUser}) => {
    // Destructure values from the useCart hook
    const { cartProducts, cartTotalAmount, handleClearCart } = useCart();

    const router = useRouter();

    // If the cart is empty, render a message and a link to start shopping
    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">Your Cart is empty</div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        );
    }

    // Render the main content of the Cart page
    return (
        <div>
            {/* Heading for the Shopping Cart */}
            <Heading title="Shopping Cart" center />

            {/* Grid for displaying product details */}
            <div className="grid grid-cols-5 text-xs gap-4 mt-8 pb-2 items-center">
                <div className="col-span-2 justify-self-start ml-5">PRODUCT</div>
                <div className="justify-self-center">PRICE</div>
                <div className="justify-self-center">QUANTITY</div>
                <div className="justify-self-end mr-5">TOTAL</div>
            </div>

            {/* Render each item in the cart */}
            <div>
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item} />;
                })}
            </div>

            {/* Footer section with Clear Cart button, Subtotal, and Checkout options */}
            <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                <div className="w-[90px]">
                    <Button label="Clear Cart" onClick={() => handleClearCart()} small outline />
                </div>
                <div className="text-sm flex flex-col gap-1 items-start">

                    {/* Subtotal information */}
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Sub Total</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>

                    {/* Additional information about taxes and shipping */}
                    <p className="text-slate-500">
                        Taxes and Shipping Calculate and Checkout
                    </p>

                    {/* Checkout and Continue Shopping buttons */}
                    <Button label={currentUser? "Checkout" : "Login To Checkout"} 
                        outline={currentUser ? false : true}
                        onClick={() => {
                            currentUser ? router.push("/checkout") : router.push("/login") 
                        }} />

                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Export the CartClient component as the default export
export default CartClient;
