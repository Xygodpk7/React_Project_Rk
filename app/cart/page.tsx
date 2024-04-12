// Import necessary modules and components
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import CartClient from "./CartClient";

// React functional component for the Cart page
const Cart = async() => {
    
    const currentUser = await getCurrentUser();
    // Render the Cart page content within a Container component
    return (
        <div className="p-8">
            <Container>
                {/* Render the CartClient component for displaying the cart content */}
                <CartClient currentUser = {currentUser}/>
            </Container>
        </div>
    );
};

// Export the Cart component as the default export
export default Cart;
