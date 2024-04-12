// Using the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and components
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

// React functional component for the CartCount
const CartCount = () => {
    // Use the useCart hook to get the total quantity of items in the cart
    const { cartTotalQty } = useCart();
    // Use the useRouter hook to navigate to the cart page
    const router = useRouter();

    return (
        // Container for the cart icon and count badge with click event handler for navigation
        <div className="
            relative 
            cursor-pointer"
            onClick={() => router.push('/cart')}
        >
            {/* Cart icon */}
            <div className="text-3xl">
                <CiShoppingCart />
            </div>
            {/* Count badge indicating the total quantity of items in the cart */}
            <span className="
                absolute 
                top-[-10px] 
                right-[-10px] 
                bg-slate-700 
                text-white 
                h-6 
                w-6 
                flex
                rounded-full 
                items-center 
                justify-center 
                text-sm"
            >
                {cartTotalQty}
            </span>
        </div>
    );
};

// Export the CartCount component as the default export
export default CartCount;
