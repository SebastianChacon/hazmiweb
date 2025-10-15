import React from "react";
import { Check } from "lucide-react";

export const SuccessMessage: React.FC = () => {
  return (
    <div className="bg-green-100 border-2 border-green-500 rounded-lg p-8 text-center">
      <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-green-800 mb-2">
        ¡Solicitud Enviada!
      </h3>
      <p className="text-green-700">
        Nos pondremos en contacto contigo pronto.
      </p>
    </div>
  );
};
