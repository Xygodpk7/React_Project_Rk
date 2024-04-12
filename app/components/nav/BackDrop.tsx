// Define the props interface for the BackDrop component
interface BackDropProps {
  onClick: () => void; // Callback function to be triggered on click
}

// React functional component for the BackDrop
const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  return (
    // Div acting as the backdrop with specified styles and click event handler
    <div
      onClick={onClick} // Trigger the provided onClick callback on click
      className="
        z-20
        bg-slate-200
        opacity-50
        w-screen
        h-screen
        fixed
        top-0
        left-0
        cursor-pointer"
    ></div>
  );
};

// Export the BackDrop component as the default export
export default BackDrop;
