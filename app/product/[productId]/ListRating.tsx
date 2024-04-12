// use client directive to specify that this component is for the client-side
"use client";

// Import necessary components and libraries
import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

// Define the props interface
interface ListRatingProps {
  product: any;
}

// Define the ListRating component
const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  if (!product.review || product.review.length === 0) return null;
  return (
    <div>
      {/* Display the heading for the product reviews */}
      <Heading title="Product Review" center={false} />

      {/* Iterate over the product reviews and display each review */}
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                {/* Display user information, including the Avatar, name, and creation date */}
                <div className="flex gap-2 items-center">
                  <Avatar src={review?.user?.image} /> {/* Use optional chaining */}
                  <div className="font-semibold">{review?.user?.name}</div> {/* Use optional chaining */}
                  <div className="font-light">{moment(review.createdDate).fromNow()}</div>
                </div>

                {/* Display the rating of the review */}
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                </div>

                {/* Display the review comment */}
                <div className="ml-2">{review.comment}</div>

                {/* Add a horizontal rule to separate each review */}
                <hr className="mt-4 mb-4"></hr>
              </div>
            );
          })}
      </div>
    </div>
  );
};

// Export the ListRating component as the default export
export default ListRating;
