import { getCollection } from 'astro:content';

/** Projects with featured ones first, then newest first. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/** Ideas, newest first. */
export async function getIdeas() {
  const ideas = await getCollection('ideas');
  return ideas.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
