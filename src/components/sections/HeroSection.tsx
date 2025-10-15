import React from "react";
import { Button } from "../ui/Button";
import { PRICE } from "../../utils/constants";

interface HeroSectionProps {
  onNavigateToContact: () => void;
  onNavigateToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToContact,
  onNavigateToServices,
}) => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Tu Página Web Profesional por solo{" "}
              <span className="text-blue-600">{PRICE}</span>
            </h1>
            <p className="text-xl text-gray-600">
              Impulsa tu negocio con una presencia digital moderna, rápida y
              efectiva. Sin complicaciones, sin costos ocultos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={onNavigateToContact}>
                Contratar Ahora
              </Button>
              <Button variant="secondary" onClick={onNavigateToServices}>
                Ver Servicios
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
