const BASE = 'https://www.visanixglobal.com';

export default function sitemap() {
  const now = new Date().toISOString();

  // ── Root site routes ──────────────────────────────────────────────────────
  const root = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/calculator`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/ptfe-supplier-delhi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ptfe-supplier-gurugram`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ptfe-supplier-india`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/engineering-plastics`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  // Root product slugs
  const rootProducts = [
    'ptfe-rod', 'ptfe-sheet-skived', 'ptfe-sheet-moulded', 'ptfe-tube',
    'ptfe-bush', 'ptfe-ball', 'ptfe-gland', 'ptfe-gasket', 'ptfe-ring', 'ptfe-tape',
  ].map(slug => ({
    url: `${BASE}/products/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Root engineering plastics slugs
  const rootEP = [
    'cast-nylon-sheet', 'cast-nylon-rod', 'nylon-rod', 'pvc-sheet', 'pp-sheet',
    'pp-rod', 'pu-sheet', 'pu-rod', 'delrin-sheet', 'delrin-rod', 'peek-sheet',
    'acrylic-rod', 'ep-custom-components',
  ].map(slug => ({
    url: `${BASE}/engineering-plastics/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Root industry slugs
  const rootIndustries = [
    'pharmaceutical', 'chemical-processing', 'oil-and-gas',
    'food-processing', 'water-treatment', 'industrial-manufacturing',
  ].map(slug => ({
    url: `${BASE}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // ── Polymers section (/polymers) ──────────────────────────────────────────
  const polymers = [
    { url: `${BASE}/polymers`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/polymers/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/polymers/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/polymers/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/polymers/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/polymers/engineering-plastics`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/polymers/ptfe-supplier-delhi`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/polymers/ptfe-supplier-gurugram`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/polymers/ptfe-supplier-india`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/polymers/products/ptfe-grades`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const polymersProducts = [
    'ptfe-rod', 'ptfe-sheet-skived', 'ptfe-sheet-moulded', 'ptfe-tube',
    'ptfe-bush', 'ptfe-ball', 'ptfe-gland', 'ptfe-gasket', 'ptfe-ring', 'ptfe-tape',
  ].map(slug => ({
    url: `${BASE}/polymers/products/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const polymersEP = [
    'cast-nylon-sheet', 'cast-nylon-rod', 'nylon-rod', 'pvc-sheet', 'pp-sheet',
    'pp-rod', 'pu-sheet', 'pu-rod', 'delrin-sheet', 'delrin-rod', 'peek-sheet',
    'acrylic-rod', 'ep-custom-components',
  ].map(slug => ({
    url: `${BASE}/polymers/engineering-plastics/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const polymersIndustries = [
    'pharmaceutical', 'chemical-processing', 'oil-and-gas',
    'food-processing', 'water-treatment', 'industrial-manufacturing',
  ].map(slug => ({
    url: `${BASE}/polymers/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // ── Impex section (/impex) ────────────────────────────────────────────────
  const impex = [
    { url: `${BASE}/impex`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/impex/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/impex/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/impex/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  return [
    ...root,
    ...rootProducts,
    ...rootEP,
    ...rootIndustries,
    ...polymers,
    ...polymersProducts,
    ...polymersEP,
    ...polymersIndustries,
    ...impex,
  ];
}
