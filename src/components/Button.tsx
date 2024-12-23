import React from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  onClick,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        font-semibold 
        hover:opacity-80 
        transition 
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-main"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-black" : "border-main"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white" : ""}
        ${outline ? "text-white" : ""}
        ${className || ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
