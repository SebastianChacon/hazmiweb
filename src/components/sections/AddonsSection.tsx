import React from "react";
import {
  Search,
  TrendingUp,
  BarChart2,
  Shield,
  Palette,
  Globe,
  FilePlus,
  MessageCircle,
  Mail,
  Languages,
} from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { ScaleIn } from "../animations/ScaleIn";
import { motion } from "framer-motion";
import { ADDONS } from "../../utils/constants";

interface AddonsSectionProps {
  onNavigateToContact: () => void;
}

const ICON_COMPONENTS: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  TrendingUp,
  BarChart2,
  Shield,
  Palette,
  Globe,
  FilePlus,
  MessageCircle,
  Mail,
  Languages,
};

export const AddonsSection: React.FC<AddonsSectionProps> = ({ onNavigateToContact }) => {
  return (
    <section id="addons" className="section-container bg-white">
      <div className="section-content">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Servicios Adicionales
            </span>
            <h2 className="section-heading text-gray-900">
              Potencia Tu Proyecto con Add-ons
            </h2>
            <p className="section-description text-gray-600 max-w-2xl mx-auto">
              Complementa cualquier paquete con servicios adicionales diseñados para
              maximizar el impacto de tu presencia digital.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {ADDONS.map((addon, idx) => {
            const Icon = ICON_COMPONENTS[addon.icon] ?? Globe;
            return (
              <ScaleIn key={addon.name} delay={idx * 0.06}>
                <motion.div
                  className="group bg-white border border-gray-100 rounded-2xl p-5 elevation-2 hover-elevate transition-all cursor-default h-full flex flex-col"
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={onNavigateToContact}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 elevation-1 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
                    {addon.name}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {addon.description}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100">
                      {addon.price}
                    </span>
                  </div>
                </motion.div>
              </ScaleIn>
            );
          })}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center elevation-3">
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto text-sm">
              Si tu proyecto necesita algo que no está en la lista, cuéntamelo. Diseño
              soluciones a medida para cada necesidad.
            </p>
            <motion.button
              onClick={onNavigateToContact}
              className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors elevation-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Consultar Gratis
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
