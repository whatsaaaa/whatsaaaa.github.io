export const siteName = 'whatsaaaa';
export const siteDescription =
  'Whatsaaaa builds web applications end to end. Projects, tools and ideas.';
export const github = 'https://github.com/whatsaaaa';

/** The sections of the site, in the order of their tabs. */
export const sections = [
  { id: 'home', href: '/', label: 'home' },
  { id: 'projects', href: '/projects/', label: 'projects' },
  { id: 'ideas', href: '/ideas/', label: 'ideas' },
] as const;

export type Section = (typeof sections)[number]['id'];
