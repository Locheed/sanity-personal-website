import client from '../lib/client';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import { getAllNavigationLinks } from '../lib/api';

export default function Home({ data: { hero }, links }) {
  return (
    <Layout links={links}>
      <Hero hero={hero} />
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const data = await client.fetch(`*[_type == "singletonHome"][0] {
    hero,
  }`);

  const links = await getAllNavigationLinks();
  console.log('🚀 ~ file: index.js ~ line 19 ~ getStaticProps ~ links', links);
  return {
    props: {
      data,
      links,
    },
  };
}
