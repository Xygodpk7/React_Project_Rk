// Import necessary modules and libraries
import React from "react";

// Define the props interface for the Heading component
interface HeadingProps {
    title: string; // Title text
    center: boolean; // Flag to determine if the title should be centered
}

// React functional component for the Heading
const Heading: React.FC<HeadingProps> = ({ title, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <h1 className="font-bold text-2xl">{title}</h1>
        </div>
    );
};

// Export the Heading component as the default export
export default Heading;
