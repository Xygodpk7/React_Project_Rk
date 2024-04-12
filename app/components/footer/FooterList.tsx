// Define the props interface for the FooterList component
interface FooterListProps {
    children: React.ReactNode;
}

// React functional component for the FooterList
const FooterList: React.FC<FooterListProps> = ({ children }) => {
    return (
        // Container for each section of the footer with a specific width and spacing
        <div className="
            w-full 
            sm:w-1/2 
            md:w-1/4 
            lg:w-1/6 
            mb-6 
            flex 
            flex-col
            gap-2"
        >
            {/* Render the content passed as children */}
            {children}
        </div>
    );
}

// Export the FooterList component as the default export
export default FooterList;
