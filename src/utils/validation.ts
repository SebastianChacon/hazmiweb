export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateForm = (formData: {
  name: string;
  email: string;
  description: string;
}) => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = "El nombre es requerido";
  }
  if (!formData.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Email inválido";
  }
  if (!formData.description.trim()) {
    errors.description = "La descripción es requerida";
  }

  return errors;
};
