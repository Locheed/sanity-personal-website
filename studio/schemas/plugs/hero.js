export default {
    name: "hero",
    type: "object",
    title: "Hero",
    fields: [
        {
            name: "subtitle",
            type: "text",
            title: "Subtitle",
        },
        {
            name: "image",
            type: "image",
            title: "Hero image",
        },
        {
            name: "socialMediaLinks",
            type: "array",
            title: "Social Media Links",
            of: [{ type: "socialMedia" }],
        },
    ],
};
