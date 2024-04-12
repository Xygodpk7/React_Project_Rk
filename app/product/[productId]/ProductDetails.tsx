// Import necessary dependencies and components
"use client";
import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

// Define the types for the component props
interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

// Component for displaying detailed product information and handling interactions
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  // Hooks for handling cart operations
  const { handleAddProductToCart, cartProducts } = useCart();
  const router = useRouter();

  // Local state to track whether the product is in the cart
  const [isProductInCart, setIsProductInCart] = useState(false);

  // Local state for the current cart product
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  // Calculate average product rating
  const productRating =
    product.reviews.reduce(
      (acc: number, item: any) => item.rating + acc,
      0
    ) / product.reviews.length;

  // Handle the selection of a different color for the product
  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  // Handle quantity increase
  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity < 99) {
      setCartProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
    }
  }, [cartProduct.quantity]);

  // Handle quantity decrease
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity > 1) {
      setCartProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  }, [cartProduct.quantity]);

  // Effect to check if the product is in the cart
  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product.id]);

  return (
    <div
      className="
        grid 
        grid-cols-1
        md : grid-cols-2
        gap-12"
    >
      {/* ProductImage component */}
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      {/* Product details and interactions */}
      <div
        className="flex
             flex-col 
             gap-1 
             text-slate-500 
             text-sm"
      >
        {/* Product name */}
        <h2
          className="text-3xl font-medium
                text-slate-700"
        >
          {product.name}
        </h2>
        <div className="flex items-center gap-2">
          {/* Product rating */}
          <Rating value={productRating} readOnly />
          {/* Number of reviews */}
          <div>{product.reviews.length} Reviews</div>
        </div>
        {/* Horizontal line */}
        <hr className="w-[30%] my-2"></hr>
        {/* Product description */}
        <div className="text-justify">{product.description}</div>
        {/* Horizontal line */}
        <hr className="w-[30%] my-2"></hr>
        {/* Product category */}
        <div>
          <span className="font-semibold">CATEGORY : </span>
          {product.category}
        </div>
        {/* Product brand */}
        <div>
          <span className="font-semibold">BRAND : </span>
          {product.brand}
        </div>
        {/* Product availability */}
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of Stock"}
        </div>
        {/* Horizontal line */}
        <hr className="w-[30%] my-2"></hr>
        {/* Conditional rendering based on whether the product is in the cart */}
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex item-center gap-1">
              {/* Check circle icon for product in cart */}
              <MdCheckCircle size={20} className="text-teal-400" />
              {/* Message indicating that the product is added to the cart */}
              <span>Product Added To Cart</span>
            </p>
            {/* View Cart button */}
            <div className="max-w-[300px]">
              <Button
                label="View Cart"
                outline
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            {/* SetColor component for selecting product color */}
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            {/* Horizontal line */}
            <hr className="w-[30%] my-2"></hr>
            {/* SetQuantity component for adjusting product quantity */}
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
              />
              {/* Horizontal line */}
              <hr className="w-[30%] my-2"></hr>
              {/* Button for adding the product to the cart */}
              <div className="max-w-[300px]">
                <Button
                  label="Add To Cart"
                  onClick={() => handleAddProductToCart(cartProduct)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  // Export the ProductDetails component
  export default ProductDetails;
  