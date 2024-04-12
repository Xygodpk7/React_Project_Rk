// Using the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and libraries
import React from "react";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";

// Define the props interface for the SetQuantity component
interface SetQtyProps {
    cartCounter?: boolean; // Flag indicating whether it's a cart counter (optional)
    cartProduct: CartProductType; // Details of the product in the cart
    handleQtyIncrease: () => void; // Callback function for increasing quantity
    handleQtyDecrease: () => void; // Callback function for decreasing quantity
}

// Button styles common to both increase and decrease buttons
const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded';

// React functional component for the SetQuantity
const SetQuantity: React.FC<SetQtyProps> = ({
    cartCounter,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease,
}) => {
    return (
        <div className="flex 
        gap-8 
        items-center">
            {/* Display the label for quantity if not a cart counter */}
            {cartCounter ? null : (
                <div className="font-semibold">QUANTITY :</div>
            )}
            {/* Display buttons for increasing and decreasing quantity */}
            <div className="flex 
            gap-4 
            items-center 
            text-base">
                {/* Button to decrease quantity */}
                <button onClick={handleQtyDecrease} className={btnStyles}>
                    -
                </button>
                {/* Display the current quantity */}
                <div>{cartProduct.quantity}</div>
                {/* Button to increase quantity */}
                <button onClick={handleQtyIncrease} className={btnStyles}>
                    +
                </button>
            </div>
        </div>
    );
};

// Export the SetQuantity component as the default export
export default SetQuantity;
