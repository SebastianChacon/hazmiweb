export interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ServiceFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: {
    bg: string;
    icon: string;
  };
}
