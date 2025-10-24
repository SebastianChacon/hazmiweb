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
    <section id="contacto" className="section-container bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading text-gray-900">
            ¡Comienza Hoy!
          </h2>
          <p className="section-description text-gray-600">
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
