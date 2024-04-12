// Using the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and libraries
import React from "react";
import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

// Define the props interface for the SetColor component
interface SetColorProps {
    images: SelectedImgType[]; // Array of color options for the product
    cartProduct: CartProductType; // Details of the product in the cart
    handleColorSelect: (value: SelectedImgType) => void; // Callback function for color selection
}

// React functional component for the SetColor
const SetColor: React.FC<SetColorProps> = ({
    images,
    cartProduct,
    handleColorSelect,
}) => {
    return (
        <div>
            {/* Display the material and color options */}
            <div className="flex gap-4 items-center">
                <span className="font-semibold">MATERIAL: </span>
                <div className="flex gap-1">
                    {images.map((image) => (
                        // Individual color option
                        <div
                            key={image.color}
                            onClick={() => handleColorSelect(image)}
                            className={`
                                h-7
                                w-7
                                rounded-full
                                border-teal-300
                                flex
                                items-center
                                justify-center
                                ${
                                    cartProduct.selectedImg.color ===
                                    image.color
                                        ? "border-[1.5px]"
                                        : "border-none"
                                }
                            `}
                        >
                            {/* Display the color option */}
                            <div
                                style={{ background: image.colorCode }}
                                className="
                                    h-5
                                    w-5
                                    rounded-full
                                    border-[1.2px]
                                    border-slate-300
                                    cursor-pointer"
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Export the SetColor component as the default export
export default SetColor;
