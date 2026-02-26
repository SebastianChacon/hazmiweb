import { createClient } from "@supabase/supabase-js";

// Configuración de Supabase desde variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Crear cliente de Supabase (null si faltan las variables de entorno)
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

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
