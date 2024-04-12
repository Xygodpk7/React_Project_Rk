// Define the props interface for the MenuItem component
interface MenuItemProps {
    children: React.ReactNode; // Content to be displayed inside the MenuItem
    onClick: () => void; // Callback function to be triggered on click
}

// React functional component for the MenuItem
const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
    return (
        // Div acting as the menu item with specified styles and click event handler
        <div
            onClick={onClick} // Trigger the provided onClick callback on click
            className="
                px-4
                py-3
                hover:bg-neutral-100
                transition"
        >
            {/* Display the content passed as children */}
            {children}
        </div>
    );
};

// Export the MenuItem component as the default export
export default MenuItem;
