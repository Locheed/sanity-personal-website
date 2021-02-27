import client from './client';

const postFields = `
  title,
  'slug': slug.current
`;

export async function getPageBySlug(slug) {
  const results = await client.fetch(
    `*[ _type == 'page' && slug.current == "${slug}"][0] {
          ${postFields}
        }`
  );
  return results;
}

export async function getAllPages() {
  const results = await client.fetch(
    `*[ _type == 'page'] {
          ${postFields}
        }`
  );

  return results;
}

export async function getAllNavigationLinks() {
  const results = await client.fetch(
    `*[ _type == 'navigation'] {
         navItems
        }`
  );
  console.log(
    '🚀 ~ file: api.js ~ line 34 ~ getAllNavigationLinks ~  results',
    results
  );
  return results;
}
