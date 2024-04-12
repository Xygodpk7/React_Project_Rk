// Using the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and libraries
import React from "react";
import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

// Define the props interface for the ProductImage component
interface ProductImageProps {
  cartProduct: CartProductType; // Details of the product in the cart
  product: any; // Product information
  handleColorSelect: (value: SelectedImgType) => void; // Callback function for color selection
}

// React functional component for the ProductImage
const ProductImage: React.FC<ProductImageProps> = ({ 
  cartProduct, 
  product, 
  handleColorSelect 
}) => {

  return (
    // Container for the product images grid and the selected product image
    <div className="
      grid 
      grid-cols-6 
      gap-2 
      h-full 
      max-h-[500px] 
      min-h-[300px] 
      sm:min-h-[400px]">
      
      {/* Grid of color options for the product */}
      <div className="
        flex flex-col 
        items-center 
        justify-center
        gap-4 
        cursor-pointer 
        border 
        h-full 
        max-h-[500px] 
        min-h-[300px] 
        sm:min-h-[400px]">
        {/* Map through product images and render color options */}
        {product.images.map((image: SelectedImgType) => (
          <div
            key={image.color}
            onClick={() => handleColorSelect(image)}
            className={`
              relative 
              w-[80%] 
              aspect-square 
              rounded ${cartProduct.selectedImg?.color === image.color ? "border-[1.5px]" : "border-none"}`}
          >
            {/* Display product image for each color option */}
            <img src={image.image} alt={image.color} />
          </div>
        ))}
      </div>
      
      {/* Selected product image */}
      <div className="
        col-span-5 
        relative 
        aspect-square">
        {/* Display the selected product image */}
        <img
          className="
            w-full 
            h-full 
            object-contain 
            max-h-[500px] 
            min-h-[300px] 
            sm:min-h-[400px]"
          src={cartProduct.selectedImg?.image}
          alt={cartProduct.name}
        />
      </div>
    </div>
  );
};

// Export the ProductImage component as the default export
export default ProductImage;
