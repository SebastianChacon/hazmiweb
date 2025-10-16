import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      className={`backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl shadow-xl ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};
