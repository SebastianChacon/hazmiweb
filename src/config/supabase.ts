import { createClient } from "@supabase/supabase-js";

// Configuración de Supabase desde variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validar que las variables de entorno estén configuradas
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase config is missing. Please check your .env.local file.");
}

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipo para la tabla contacts
export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  created_at?: string;
  status?: string;
}
