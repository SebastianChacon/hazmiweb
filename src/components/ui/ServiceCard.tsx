import React from "react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorScheme: {
    bg: string;
    icon: string;
  };
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  colorScheme,
}) => {
  return (
    <div
      className={`${colorScheme.bg} p-8 rounded-xl shadow-lg hover:shadow-2xl transition`}
    >
      <div
        className={`${colorScheme.icon} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};
