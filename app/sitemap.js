export default function sitemap() {
  const baseUrl = 'https://www.visanixglobal.com';

  const staticRoutes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: 'weekly', lastModified: '2026-05-01' },
    { url: `${baseUrl}/products`, priority: 0.9, changeFrequency: 'weekly', lastModified: '2026-05-28' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-05-01' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-05-01' },
    { url: `${baseUrl}/industries`, priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-05-28' },
    { url: `${baseUrl}/privacy-policy`, priority: 0.2, changeFrequency: 'yearly', lastModified: '2026-05-01' },
    { url: `${baseUrl}/terms-of-service`, priority: 0.2, changeFrequency: 'yearly', lastModified: '2026-05-01' },
    { url: `${baseUrl}/cookie-policy`, priority: 0.2, changeFrequency: 'yearly', lastModified: '2026-05-01' },
  ];

  const productSlugs = [
    'ptfe-rod', 'ptfe-sheet-skived', 'ptfe-sheet-moulded',
    'ptfe-tube', 'ptfe-bush', 'ptfe-ball',
    'ptfe-gland', 'ptfe-gasket', 'ptfe-ring', 'ptfe-tape',
  ];

  const productRoutes = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    priority: 0.85,
    changeFrequency: 'monthly',
    lastModified: '2026-05-28',
  }));

  const productStaticRoutes = [
    { url: `${baseUrl}/products/ptfe-grades`, priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-05-28' },
  ];

  const locationRoutes = [
    { url: `${baseUrl}/ptfe-supplier-gurugram`, priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-05-28' },
    { url: `${baseUrl}/ptfe-supplier-delhi`, priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-05-28' },
    { url: `${baseUrl}/ptfe-supplier-india`, priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-05-28' },
  ];

  const industrySlugs = [
    'pharmaceutical', 'chemical-processing', 'oil-and-gas',
    'food-processing', 'water-treatment', 'industrial-manufacturing',
  ];

  const industryRoutes = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
    lastModified: '2026-05-28',
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...productStaticRoutes,
    ...locationRoutes,
    ...industryRoutes,
  ];
}
