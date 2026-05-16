export default function sitemap() {
  const baseUrl = 'https://www.visanixglobal.com';

  // Define your static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/industries',
    '/products',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
