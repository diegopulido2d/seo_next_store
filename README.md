# SEO Next Store

Una tienda online construida con React / Next.js siguiendo principios SEO-first, utilizando SSR, metadatos dinámicos y HTML semántico para una visibilidad óptima en buscadores.

<br><br>

## Cómo ejecutar el proyecto

1. Clone el repositorio:

   ```bash
   git clone https://github.com/diegopulido2d/seo_next_store.git
   cd seo-next-store
   ```

2. Instale las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Ejecute el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) para ver la aplicación.

<br><br>

## Decisiones técnicas

**Next.js App Router** – Elegí App Router porque ofrece mejor control sobre la generación de metadatos, una forma más simple de obtener datos y un mejor rendimiento con React Server Components.

**Integración con API externa** – La aplicación obtiene datos de productos desde la API de FakeStore (https://fakestoreapi.com/docs). Usé `fetch` con `cache: "no-store"` para asegurar datos actualizados en cada request, algo esencial para un sitio de e-commerce donde el inventario y los precios pueden cambiar frecuentemente.

**Estructura de componentes** – Los componentes están organizados por funcionalidad (productCard, productList, productDetail) para mantener el código escalable y mantenible. Cada componente es responsable de sus propios estilos y características de accesibilidad.

**TypeScript** – Usado para tipado seguro y para detectar errores de forma temprana en el desarrollo.

**Tailwind CSS** - Facilita un estilo más consistente y fácil de mantener, evitando jerarquías complejas de CSS.

<br><br>

## Estrategia de renderizado (SSR)

Toda la aplicación utiliza **Server-Side Rendering (SSR)** con rutas dinámicas. Esta decisión se tomó por razones de SEO:

- **Página de inicio** – Los productos se obtienen en el servidor usando `getProducts()` y se renderizan antes de enviar el HTML al cliente. Esto asegura que los motores de búsqueda vean contenido existente e indexable.

- **Páginas de detalle de producto** – Cada página de producto se renderiza dinámicamente en el momento de la request usando el parámetro `slug`\*. La función `generateMetadata` se ejecuta en el servidor para insertar los títulos y descripciones específicas del producto dentro del `<head>` antes de que la página cargue.

\* _La función `getProductBySlug()` ejecuta `getProducts()` y luego retorna el producto que coincide con el valor del slug pasado como parámetro. Se hizo de esta manera porque el endpoint de FakeStore para productos específicos usa `product.id`, lo cual no es consistente con la estrategia elegida para URLs y enrutamiento._

<br><br>

## Consideraciones de SEO

**Metadatos dinámicos** – Cada página exporta objetos `Metadata` o usa `generateMetadata()` para rutas dinámicas. El layout raíz proporciona valores por defecto, mientras que las páginas individuales los sobrescriben con su contenido específico (ej: títulos y descripciones de productos).

**HTML semántico** – Utilicé elementos semánticos apropiados en toda la aplicación:

- `<main>` para los contenedores principales de cada página
- `<article>` para las tarjetas de producto y páginas de detalle
- `<h1>` para los títulos principales de página y nombres de producto

**Datos estructurados JSON-LD** – Las páginas de detalle de producto incluyen un bloque `<script type="application/ld+json">` con datos estructurados siguiendo las especificaciones de Schema.org. Esto ayuda a los motores de búsqueda a entender la información del producto y puede mejorar la visualización en los resultados de búsqueda.

**Accesibilidad** – Todas las imágenes incluyen atributos `alt` descriptivos, los botones tienen propiedades `aria-label`, y los estados de enfoque son visibles para navegación por teclado.

**Página 404 personalizada** – Una página de no encontrado maneja las rutas inválidas, manteniendo una buena experiencia de usuario y manejando los errores correctamente para los motores de búsqueda.

**Idioma y viewport** – La etiqueta HTML incluye `lang="en"` para contenido en inglés, y las meta etiquetas de viewport aseguran un renderizado correcto en dispositivos móviles.

<br><br>
_Este proyecto fue creado por Diego F. Pulido en Marzo 2026_
