-- ===================================================================
-- Script de configuración de Supabase para HazMiWeb
-- ===================================================================
--
-- INSTRUCCIONES:
-- 1. Ve a tu proyecto en Supabase
-- 2. Haz clic en "SQL Editor" en el menú lateral
-- 3. Haz clic en "New query"
-- 4. Copia y pega TODO este archivo
-- 5. Haz clic en "Run" o presiona Ctrl + Enter
-- 6. Deberías ver: "Success. No rows returned"
--
-- ===================================================================

-- Crear tabla contacts
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear índices para búsquedas rápidas
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_status ON contacts(status);

-- Comentarios en la tabla para documentación
COMMENT ON TABLE contacts IS 'Tabla de contactos enviados desde el formulario del sitio web';
COMMENT ON COLUMN contacts.id IS 'Identificador único (UUID)';
COMMENT ON COLUMN contacts.name IS 'Nombre del contacto';
COMMENT ON COLUMN contacts.email IS 'Email del contacto';
COMMENT ON COLUMN contacts.phone IS 'Teléfono del contacto (opcional)';
COMMENT ON COLUMN contacts.description IS 'Mensaje o descripción del proyecto';
COMMENT ON COLUMN contacts.status IS 'Estado del contacto (pending, processing, completed)';
COMMENT ON COLUMN contacts.created_at IS 'Fecha y hora de creación';

-- ===================================================================
-- Row Level Security (RLS) - Configuración de seguridad
-- ===================================================================

-- Habilitar Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT público (para el formulario de contacto)
-- Cualquiera puede crear un contacto desde el sitio web
CREATE POLICY "Allow public insert"
  ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Política: Bloquear SELECT público
-- Los usuarios no pueden ver los contactos de otras personas
-- Solo administradores autenticados podrán leer (agregar más tarde)
CREATE POLICY "Block public select"
  ON contacts
  FOR SELECT
  USING (false);

-- Política: Bloquear UPDATE público
-- Los usuarios no pueden modificar contactos existentes
CREATE POLICY "Block public update"
  ON contacts
  FOR UPDATE
  USING (false);

-- Política: Bloquear DELETE público
-- Los usuarios no pueden eliminar contactos
CREATE POLICY "Block public delete"
  ON contacts
  FOR DELETE
  USING (false);

-- ===================================================================
-- Verificación
-- ===================================================================

-- Verificar que la tabla se creó correctamente
SELECT
  table_name,
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'contacts'
ORDER BY ordinal_position;

-- ===================================================================
-- Notas adicionales:
-- ===================================================================
--
-- 1. Esta configuración permite que CUALQUIERA inserte contactos
--    pero NADIE puede leerlos sin autenticación
--
-- 2. Para leer los contactos:
--    - Ve a Table Editor en Supabase Dashboard
--    - O crea un usuario admin con autenticación
--
-- 3. Para permitir lectura a usuarios autenticados, agrega:
--    CREATE POLICY "Allow authenticated read"
--      ON contacts
--      FOR SELECT
--      USING (auth.role() = 'authenticated');
--
-- 4. Para permitir que los usuarios vean solo sus propios contactos:
--    CREATE POLICY "Users can read own contacts"


--      ON contacts
--      FOR SELECT
--      USING (auth.uid() = user_id);
--    (Necesitarás agregar columna user_id a la tabla)
--
-- ===================================================================
