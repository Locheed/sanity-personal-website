import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    //token: process.env.SANITY_TOKEN,
    useCdn: process.env.NODE_ENV === "production",
});

export default client;
