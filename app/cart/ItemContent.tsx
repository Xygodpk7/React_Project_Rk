// Using the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and dependencies
import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

// Define the props interface for the ItemContent component
interface ItemContentProps {
    item: CartProductType;
}

// React functional component for rendering individual cart items
const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    // Destructure values and functions from the useCart hook
    const {
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
    } = useCart();

    // Render the content for each cart item
    return (
        <div className="
            grid 
            grid-cols-5
            text-sm
            md:text-sm
            gap-4
            border-[1.5px]
            border-slate-200
            py-4
            items-center"
        >
            {/* Product image and details */}
            <div className="
                col-span-2
                justify-self-start
                flex
                gap-2
                md:gap-4
                ml-5"
            >
                <Link href={`.product/${item.id}`}>
                    {/* Image with link to the product details page */}
                    <div className="relative w-[70px] aspect-sqaure">
                        <Image
                            src={item.selectedImg.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    {/* Link to the product details page with truncated product name */}
                    <Link href={`.product/${item.id}`}>{truncateText(item.name)}</Link>
                    <div>{item.selectedImg.color}</div>
                    {/* Button to remove the product from the cart */}
                    <div className="w-[70px]">
                        <button
                            className="text-slate-500 underline"
                            onClick={() => handleRemoveProductFromCart(item)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            {/* Price of the product */}
            <div className="justify-self-center">{formatPrice(item.price)}</div>

            {/* Quantity setter component */}
            <div className="justify-self-center">
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handleQtyIncrease={() => handleCartQtyIncrease(item)}
                    handleQtyDecrease={() => handleCartQtyDecrease(item)}
                />
            </div>

            {/* Total price of the product(s) */}
            <div className="justify-self-end font-semibold mr-5">
                {formatPrice(item.price * item.quantity)}
            </div>
        </div>
    );
};

// Export the ItemContent component as the default export
export default ItemContent;
