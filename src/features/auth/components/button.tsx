import React, { type  ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled,
  className = "",
  ...props
}) => {
  const baseStyle =
    "rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4B3687]/20 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#4B3687] text-white hover:bg-[#5A4596]",
    secondary: "bg-[#007ABF] text-white hover:bg-[#0089D1]",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border-2 border-[#4B3687] text-[#4B3687] hover:bg-[#4B3687] hover:text-white",
  };

  const sizes = {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;