"use client";
// Import necessary modules and components
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Inputs from "../components/inputs/Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

// Define the props interface
interface RegisterFormProps {
  currentUser: SafeUser | null;
}

// RegisterForm component definition
const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form configuration
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Router instance
  const router = useRouter();

  // Effect to redirect if the user is already logged in
  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, [currentUser, router]);

  // Form submission handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Start loading
    setIsLoading(true);

    // Perform registration via API call
    axios
      .post("/api/register", data)
      .then(() => {
        // Registration successful, display success toast

        toast.success("Account Created");

        // Sign in the user after registration
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            // Redirect to the cart after successful login
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }

          if (callback?.error) {
            // Display error toast if login fails
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        // Stop loading after registration attempt is complete
        setIsLoading(false);
      });
  };

  // Render content based on the user's login status
  if (currentUser) {
    return <p className="text-center">Logged In. Redirecting....</p>;
  }

  return (
    <>
      {/* Display the form header */}
      <Heading title="Sign Up AL FAZAL" center={false} />

      {/* Display Google sign-up option */}
      <Button
        outline
        label="Sign up with Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google");
        }}
      />

      {/* Display horizontal rule */}
      <hr className="bg-slate-300 w-full h-px" />

      {/* Display input fields for name, email, and password */}
      <Inputs
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      {/* Display the "Sign Up" button */}
      <Button
        label={isLoading ? "Loading" : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />

      {/* Display the login link */}
      <p className="text-sm">
        Already have an account?{" "}
        <Link className="underline" href={"/login"}>
          Log In
        </Link>
      </p>
    </>
  );
};

// Export the RegisterForm component
export default RegisterForm;
