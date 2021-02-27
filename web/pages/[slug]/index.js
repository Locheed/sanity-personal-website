import { getAllPages, getPageBySlug } from "../../lib/api";

const Page = ({ page }) => {
    return (
        <div>
            <pre>{JSON.stringify(page, null, 2)}</pre>
        </div>
    );
};

export async function getStaticProps({ params }) {
    const page = await getPageBySlug(params.slug);

    return {
        props: { page },
    };
}

export async function getStaticPaths() {
    const pages = await getAllPages();

    const paths = pages?.map((path) => {
        return {
            params: { slug: path.slug },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

// export async function getStaticProps({ params }) {
//     const query = `*[ _type == "page" && slug.current == "${params.slug}" ][0] {
//       title,
//       'slug': slug.current
//     }`;
//     const page = await client.fetch(query);

//     return {
//         props: {
//             page,
//         },
//     };
// }

// export async function getStaticPaths() {
//     const paths = await client.fetch(`*[_type == "page"] {
//          'params': { "slug": slug.current }
//       }`);

//     return {
//         paths,

//         fallback: false,
//     };
// }
export default Page;
