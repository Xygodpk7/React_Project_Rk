// Using the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and types from react-hook-form
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

// Define the props interface for the Inputs component
interface TextAreaProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

// React functional component for the Inputs
const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    // Container for the input field with relative positioning
    <div className="w-full relative">
      {/* Input field */}
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        // Styling classes based on conditions and focus states
        className={`
          peer
          w-full
          p-4
          pt-6
          max-h-[150px]
          min-h-[150px]
          outline-none
          bg-white
          border-2
          rounded-md
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? 'border-rose-400' : 'border-slate-300'}
          ${errors[id] ? 'focus:border-rose-400' : 'focus:border-slate-300'}
        `}
      />
      {/* Label for the input field */}
      <label
        htmlFor={id}
        // Styling classes based on conditions and focus states
        className={`
          absolute
          cursor-text
          text-md
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? 'text-rose-500' : 'text-slate-400'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

// Export the Inputs component as the default export
export default TextArea;
