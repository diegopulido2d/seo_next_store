# SEO Next Store

A React / Next.js e-commerce storefront built with SEO-first principles, demonstrating server-side rendering, dynamic metadata, and semantic HTML for optimal search engine visibility.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/diegopulido2d/seo_next_store.git
   cd seo-next-store
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to see the application.

## Technical Decisions

**Next.js App Router** – I chose App Router because it offers better control over metadata generation, simpler data fetching, and improved performance with React Server Components.

**External API Integration** – The app fetches product data from FakeStore API (https://fakestoreapi.com/docs). I used `fetch` with `cache: "no-store"` to ensure fresh data on every request, which is essential for an e-commerce site where inventory and pricing may change frequently.

**Component Structure** – Components are organized by feature (productCard, productList, productDetail) to keep the code scalable and maintainable. Each component is responsible for its own styling and accessibility features.

**TypeScript** – Used for type safety and to catch potential bugs early in development.

**Tailwind CSS** - Makes styling much more consistent and easier to maintain overall, avoids complex hierarchies.

## Rendering Strategy (SSR)

The entire application uses **Server-Side Rendering (SSR)** with dynamic routes. This choice was made for SEO reasons:

- **Home Page** – Products are fetched on the server using `getProducts()` and rendered before sending HTML to the client. This ensures search engines see fully populated content.

- **Product Detail Pages** – Each product page is dynamically rendered at request time using the `slug` parameter\*. The `generateMetadata` function runs on the server to insert product titles and descriptions into the `<head>` before the page loads.

\* _The `getProductBySlug()` function executes `getProducts()` and then returns the product that matches with the slug value passed as parameter. It was done this way, because FakeStore API endpoint for specific products uses `product.id`, which is not consistent with the strategy chosen for URLs and routing._

## SEO Considerations

**Dynamic Metadata** – Each page exports `Metadata` objects or uses `generateMetadata()` for dynamic routes. The root layout provides default values, while individual pages override them with their specific content (e.g., product titles and descriptions).

**Semantic HTML** – I used appropriate semantic elements throughout:

- `<main>` for page container wrapper elements
- `<article>` for product cards and detail pages
- `<h1>` for main page titles and product names
- `<figure>` and `<figcaption>` for product images

**JSON-LD Structured Data** – Product detail pages include a `<script type="application/ld+json">` block with structured data following Schema.org specifications. This helps search engines understand product information and help setting snippets in search results.

**Accessibility** – All images include descriptive `alt` attributes, buttons have `aria-label` properties, and focus states are visible for keyboard navigation.

**Custom 404 Page** – A custom not-found page handles invalid routes, maintaining a good user experience and handling errors properly for search engines.

**Language and Viewport** – The HTML tag includes `lang="en"` for English content, and viewport meta tags ensure proper mobile rendering.

\
\
_This project was created by Diego F. Pulido on March 2026_
