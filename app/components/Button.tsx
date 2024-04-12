// Using the 'client' directive to run this file only on the client-side
"use client";

// Import necessary modules and libraries
import React from "react";
import { IconType } from "react-icons";

// Define the props interface for the Button component
interface ButtonProps {
    label: string; // Button label text
    disabled?: boolean; // Flag to disable the button
    outline?: boolean; // Flag for an outlined button
    small?: boolean; // Flag for a small-sized button
    icon?: IconType; // Icon component from react-icons
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Callback function for button click
    custom?: string; // Additional custom styles for the button (optional)
}

// React functional component for the Button
const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    icon: Icon,
    onClick,
    custom,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-md
                hover:opacity-80
                w-full
                border-slate-700
                flex
                items-center
                justify-center
                gap-2
                ${outline ? "bg-white " : 'bg-slate-700'}
                ${outline ? "text-slate-700" : 'text-white'}
                ${small ? 'text-sm font-light' : 'text-md font-semibold'}
                ${small ? "py-1 : text-md border-[1px]" : 'py-3 px-4 border-2'}
                ${custom ? custom : ""}
            `}
        >
            {/* Render the icon if provided */}
            {Icon && <Icon size={24} />}
            {label}
        </button>
    );
};

// Export the Button component as the default export
export default Button;
