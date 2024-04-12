// Import necessary modules and libraries
import React from "react";

// React functional component for the HomeBanner
const HomeBanner = () => {
  return (
    <div
      className="
        relative 
        bg-gradient-to-r
        from-sky-500 
        to-sky-700 
        mb-8
        rounded-md"
    >
      <div
        className="
          mx-auto 
          px-8 
          py-12 
          flex 
          flex-col 
          gap-2 
          md:flex-row 
          items-center 
          justify-evenly"
      >
        {/* Left side with text content */}
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Deal of the Day
          </h1>
          <p className="text-lg md:text-xsl text-white mb-2">
            Enjoy Discounts on Selected items
          </p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-bold">
            GET 30% OFF
          </p>
        </div>

        {/* Right side with image */}
        <div className="w-1/3 relative aspect-video">
          <img
            src="/banner-image.jpeg"
            alt="Banner Image"
            className="object-contain"
          ></img>
        </div>
      </div>
    </div>
  );
};

// Export the HomeBanner component as the default export
export default HomeBanner;
