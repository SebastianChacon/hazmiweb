import React from "react";
import { ContactForm } from "../forms/ContactForm";
import { SuccessMessage } from "../forms/SuccessMessage";
import type { FormData, FormErrors } from "../../types";

interface ContactSectionProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitted: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  errors,
  isSubmitted,
  onInputChange,
  onSubmit,
}) => {
  return (
    <section id="contacto" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¡Comienza Hoy!
          </h2>
          <p className="text-xl text-gray-600">
            Completa el formulario y te contactaremos en menos de 24 horas
          </p>
        </div>

        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <ContactForm
            formData={formData}
            errors={errors}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </section>
  );
};
