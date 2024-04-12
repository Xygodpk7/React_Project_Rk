"use client";
// Import React and necessary modules/components
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Inputs from "../components/inputs/Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

// Define the props interface for the LoginForm component
interface LoginFormProps {
  currentUser: SafeUser | null;
}

// Define the LoginForm component
const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(false);

  // Form handling using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Next.js router
  const router = useRouter();

  // Effect to redirect if the user is already logged in
  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  // Form submission handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    
    // Sign in with credentials
    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      // Handle the result of the sign-in attempt
      if (callback?.ok) {
        router.push('/cart');
        router.refresh();
        toast.success('Logged In');
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  // If the user is already logged in, display a redirecting message
  if (currentUser) {
    return <p className="text-center">Logged In. Redirecting....</p>;
  }

  // Render the login form
  return (
    <>
      <Heading title="Sign In to AL FAZAL" center={false} />

      {/* Button for Google sign-in */}
      <Button
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => { signIn('google') }}
      />

      {/* Horizontal rule */}
      <hr className="bg-slate-300 w-full h-px" />

      {/* Email input */}
      <Inputs
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      {/* Password input */}
      <Inputs
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      {/* Button for form submission */}
      <Button
        label={isLoading ? "Loading" : "Log In"}
        onClick={handleSubmit(onSubmit)}
      />

      {/* Link to registration page */}
      <p className="text-sm">
        Do not have an account?
        <Link
          className="underline"
          href={'/register'}
        >
          Sign Up
        </Link>
      </p>
    </>
  );
};

// Export the LoginForm component
export default LoginForm;
