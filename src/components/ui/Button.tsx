import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "gradient";
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  form?: string;
  name?: string;
  value?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
  form,
  name,
  value,
}) => {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 glow-blue elevation-2 hover:elevation-4",
    secondary:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 elevation-1 hover:elevation-2",
    gradient:
      "bg-gradient-brand text-white glow-purple elevation-3 hover:elevation-5 animate-gradient",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      form={form}
      name={name}
      value={value}
    >
      {children}
    </motion.button>
  );
};
