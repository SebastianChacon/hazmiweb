import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gradient";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    gradient:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
  };

  return (
    <button
      className={`px-8 py-4 rounded-lg font-semibold transition transform hover:-translate-y-1 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
