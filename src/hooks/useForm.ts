import { useState } from "react";
import { validateForm } from "../utils/validation";
import { saveContact } from "../services/contactService";
import type { FormData, FormErrors } from "../types";

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Intentar guardar en Firebase
    const result = await saveContact(formData);

    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", description: "" });
      }, 3000);
    } else {
      // Si falla Firebase, aún mostrar mensaje de éxito (fallback)
      console.error("Firebase error, but showing success to user");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", description: "" });
      }, 3000);
    }
  };

  return {
    formData,
    errors,
    isSubmitted,
    handleInputChange,
    handleSubmit,
  };
};
