// Use the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and libraries
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

// Define the props interface for the ProductCard component
interface ProductCardProps {
  data: any; // Product data passed as a prop
}

// Define the ProductCard component
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  // Calculate the average rating from reviews
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length;

  console.log(productRating);

  return (
    // Container for the product card with click event handler for navigation
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      key={data.id}
      className="
      col-span-1 
      cursor-pointer 
      border-[1.2px] 
      border-slate-200 
      bg-slate-50 
      rounded-sm 
      p-2 
      transition 
      hover:scale-105 
      text-center text-sm"
    >
      {/* Container for the product details */}
      <div className="
      flex 
      flex-col 
      items-center 
      w-full 
      gap-1">
        {/* Container for the product image */}
        <div className="
        aspect-square 
        overflow-hidden 
        relative w-full">
          <img className="
          w-full 
          h-full 
          object-contain" src={data.images[0].image} alt={data.name} />
        </div>
        {/* Product name */}
        <div className="mt-4">{truncateText(data.name)}</div>
        {/* Product rating */}
        <div>
          <Rating value={productRating} readOnly />
        </div>
        {/* Number of reviews */}
        <div>{data.reviews.length} Reviews</div>
        {/* Product price */}
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

// Export the ProductCard component as the default export
export default ProductCard;
