import React from "react";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";
import { PRICE } from "../../utils/constants";
import type { FormData, FormErrors } from "../../types";

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  errors,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
      <Input
        label="Nombre Completo"
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={onInputChange}
        error={errors.name}
        required
      />

      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={onInputChange}
        error={errors.email}
        required
      />

      <Input
        label="Teléfono (Opcional)"
        id="phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={onInputChange}
      />

      <TextArea
        label="Descripción de tu Negocio"
        id="description"
        name="description"
        value={formData.description}
        onChange={onInputChange}
        error={errors.description}
        rows={4}
        placeholder="Cuéntanos sobre tu negocio y qué te gustaría en tu página web..."
        required
      />

      <Button type="submit" variant="gradient" className="w-full text-lg">
        Contratar por {PRICE}
      </Button>

      <div className="text-center text-sm text-gray-600">
        <p>* Campos requeridos</p>
      </div>
    </form>
  );
};
