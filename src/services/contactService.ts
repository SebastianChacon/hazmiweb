import { supabase } from '../config/supabase';
import type { FormData } from '../types';

export const saveContact = async (data: FormData) => {
  try {
    const { data: contact, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          description: data.description,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    console.log('✅ Contact saved successfully:', contact.id);
    return { success: true, id: contact.id };
  } catch (error: any) {
    console.error('❌ Error saving contact to Supabase:');
    console.error('Code:', error.code);
    console.error('Message:', error.message);
    console.error('Details:', error.details);

    // Explicar errores específicos
    if (error.code === '42501') {
      console.error('🔒 Row Level Security is blocking this operation.');
      console.error('👉 Check your RLS policies in Supabase Dashboard');
    } else if (error.code === 'PGRST301') {
      console.error('🌐 Network issue or Supabase is temporarily unavailable.');
    }

    return { success: false, error };
  }
};
