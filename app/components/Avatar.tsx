// Import necessary modules and libraries
import { FaUserCircle } from "react-icons/fa";

// Define the props interface for the Avatar component
interface AvatarProps {
    src?: string | null | undefined; // Source URL for the avatar image
}

// React functional component for the Avatar
const Avatar: React.FC<AvatarProps> = ({ src }) => {
    // If source URL is provided, display the image
    if (src) {
        return (
            <img
                src={src}
                alt="Avatar"
                className="rounded-full"
                height="30"
                width="30"
            />
        );
    }
    // If source URL is not provided, display the FaUserCircle icon
    return <FaUserCircle size={24} />;
};

// Export the Avatar component as the default export
export default Avatar;
