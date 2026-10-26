import { BOARDING_FAQS, SERVICE_AREAS, TRAINING_FAQS } from './content/local';

// Per-page search metadata. Used by the app when navigating and by
// scripts/prerender.mjs when it writes a static HTML file for each page.

export const SITE_URL = 'https://www.pasturepaw.com';
const BUSINESS_ID = `${SITE_URL}/#business`;

export interface PageMeta {
  title: string;
  description: string;
  // Breadcrumb trail below Home, e.g. [['The Farm', '/farm']]
  crumbs?: [string, string][];
}

const BREEDS: Record<string, { name: string; title: string; description: string }> = {
  'highland-cattle': {
    name: 'Highland Cattle',
    title: 'Scottish Highland Cattle in Enumclaw, WA | Pasture & Paw',
    description: 'Hardy, gentle Scottish Highland cattle are the heart of the rotational pastures at Pasture & Paw in Enumclaw, WA.',
  },
  'dexter-cattle': {
    name: 'Dexter Cattle',
    title: 'Dexter Cattle in Enumclaw, WA | Pasture & Paw',
    description: 'Small in stature, big in purpose: Dexter cattle help graze and manage the pastures at Pasture & Paw in Enumclaw, WA.',
  },
  'norwegian-goats': {
    name: 'Norwegian Dairy Goats',
    title: 'Norwegian Dairy Goats in Enumclaw, WA | Pasture & Paw',
    description: "Norwegian dairy goats are Pasture & Paw's natural brush-clearing team, working tree lines and slopes in Enumclaw, WA.",
  },
  'silver-fox-rabbits': {
    name: 'Silver Fox Rabbits',
    title: 'Silver Fox Rabbits | Pasture & Paw',
    description: 'Pasture & Paw raises Silver Fox rabbits, a rare American heritage breed, and shares them with local 4-H youth.',
  },
};

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Pasture & Paw | Working Farm & Dog Training in Enumclaw, WA',
    description: 'Pasture & Paw is a working family farm and canine academy in Enumclaw, Washington, serving greater King County. Heritage livestock, healthy pastures, and real-world dog training.',
  },
  '/farm': {
    title: 'The Farm | Heritage Cattle, Goats & Rabbits | Pasture & Paw',
    description: 'Meet the heritage cattle, Norwegian goats, and Silver Fox rabbits raised on rotational pastures at Pasture & Paw in Enumclaw, WA.',
    crumbs: [['The Farm', '/farm']],
  },
  '/training': {
    title: 'Dog Training in Enumclaw, WA | Pasture & Paw',
    description: 'Personalized dog training on a working farm. Dogs learn calm focus around livestock, open fields, and daily chores. Serving Enumclaw and greater King County.',
    crumbs: [['Dog Training', '/training']],
  },
  '/dog-boarding': {
    title: 'Dog Boarding in Enumclaw, WA | Farm Boarding | Pasture & Paw',
    description: 'Farm dog boarding in Enumclaw, WA. Cared for by experienced trainers, with daily outdoor time on open pasture and a small, calm guest count. Overnight, extended, and weekly stays.',
    crumbs: [['Dog Boarding', '/dog-boarding']],
  },
  '/contact': {
    title: 'Book Training or a Farm Visit | Pasture & Paw',
    description: 'Request dog training, farm boarding, or a farm visit at Pasture & Paw in Enumclaw, Washington.',
    crumbs: [['Contact', '/contact']],
  },
  '/privacy': {
    title: 'Privacy Policy | Pasture & Paw',
    description: 'How Pasture & Paw handles the information you share through our booking form and how we measure site visits.',
    crumbs: [['Privacy Policy', '/privacy']],
  },
  ...Object.fromEntries(
    Object.entries(BREEDS).map(([slug, b]) => [
      `/farm/${slug}`,
      { title: b.title, description: b.description, crumbs: [['The Farm', '/farm'], [b.name, `/farm/${slug}`]] },
    ]),
  ),
};

export const NOT_FOUND_META: PageMeta = {
  title: 'Page Not Found | Pasture & Paw',
  description: "We couldn't find that page. Head back to Pasture & Paw to learn about our farm and dog training in Enumclaw, WA.",
};

export const ALL_PATHS = Object.keys(PAGE_META);

export const normalizePath = (pathname: string) => pathname.replace(/\/+$/, '') || '/';

export const pageMeta = (pathname: string): PageMeta | null => PAGE_META[normalizePath(pathname)] ?? null;

export const canonicalUrl = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

const AREA_SERVED = [
  ...SERVICE_AREAS.map((name) => ({ '@type': 'City', name: `${name}, WA` })),
  { '@type': 'AdministrativeArea', name: 'King County, Washington' },
];

// Page-specific structured data; the LocalBusiness block in index.html covers the whole site.
export const pageJsonLd = (path: string): object[] => {
  const meta = PAGE_META[path];
  if (!meta) return [];
  const data: object[] = [];

  if (meta.crumbs) {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [['Home', '/'] as [string, string], ...meta.crumbs].map(([name, p], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: canonicalUrl(p),
      })),
    });
  }

  const faqPage = (faqs: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  });

  if (path === '/training') {
    data.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dog Training',
        serviceType: 'Dog training',
        description: 'Personalized, real-world dog training on a working farm. Dogs learn calm focus around livestock, open fields, and daily chores.',
        url: canonicalUrl('/training'),
        provider: { '@id': BUSINESS_ID },
        areaServed: AREA_SERVED,
      },
      faqPage(TRAINING_FAQS),
    );
  }

  if (path === '/dog-boarding') {
    data.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Farm Dog Boarding',
        serviceType: 'Dog boarding',
        description: 'Farm dog boarding in Enumclaw, WA, with care from experienced trainers, daily outdoor exercise on open pasture, and a small, calm guest count.',
        url: canonicalUrl('/dog-boarding'),
        provider: { '@id': BUSINESS_ID },
        areaServed: AREA_SERVED,
      },
      faqPage(BOARDING_FAQS),
    );
  }

  return data;
};
