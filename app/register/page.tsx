// Import necessary modules and components
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";

// Register component definition
const Register = async () => {
  // Fetch the currently logged-in user
  const currentUser = await getCurrentUser();

  // Render the Register component
  return (
    <Container>
      {/* Wrap the registration form in a styled container */}
      <FormWrap>
        {/* Render the registration form */}
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

// Export the Register component
export default Register;
