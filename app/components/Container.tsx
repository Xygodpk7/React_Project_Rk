// Import necessary modules and libraries
import React from "react";

// Define the props interface for the Container component
interface ContainerProps {
    children: React.ReactNode; // Child components to be wrapped by the container
}

// React functional component for the Container
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
            {children}
        </div>
    );
};

// Export the Container component as the default export
export default Container;
