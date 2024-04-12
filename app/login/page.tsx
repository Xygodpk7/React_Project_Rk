// Import necessary modules and components
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginFrom";

// Define the Login component
const Login = async () => {
  // Get the current user's information
    const currentUser = await getCurrentUser();
    return(    
        // Container to limit the width and provide styling
        <Container>
            <FormWrap>
                {/* Render the LoginForm component with the current user information */}
                <LoginForm currentUser = {currentUser}/>
            </FormWrap>
        </Container>
    )
};

// Export the Login component as the default export
export default Login;