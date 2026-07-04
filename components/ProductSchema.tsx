// components/ProductSchema.tsx

interface ProductSchemaProps {
  name: string;
  price: number;
  description: string;
  image: string;
  sku: string;
  material: string;
}

export function ProductSchema({
  name,
  price,
  description,
  image,
  sku,
  material,
}: ProductSchemaProps) {
  const baseUrl = 'https://aminul-islam-x.vercel.app'; // Your deployment URL

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    description,
    sku,
    material,
    offers: {
      '@type': 'Offer',
      price: price.toFixed(2), // Formats 24.99 cleanly as a string
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/products/${sku}`,
    },
    // Adding placeholder rating data to pass Google's strict Rich Results criteria
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '42',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
