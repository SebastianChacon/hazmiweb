import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  data: object;
}

/**
 * Componente para agregar structured data (JSON-LD) a las páginas
 * Mejora el SEO permitiendo que los motores de búsqueda entiendan mejor el contenido
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}
