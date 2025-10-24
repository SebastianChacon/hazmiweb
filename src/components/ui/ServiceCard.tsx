import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { scaleIn, defaultTransition } from "@/utils/animations";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorScheme: {
    bg: string;
    icon: string;
  };
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  colorScheme,
  index = 0,
}) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`${colorScheme.bg} p-8 rounded-xl elevation-2 hover-elevate hover-lift`}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`${colorScheme.icon} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};
