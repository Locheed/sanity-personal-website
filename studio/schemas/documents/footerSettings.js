export default {
    name: "footerSettings",
    type: "document",
    title: "Footer Settings",
    // __experimental_actions: ["update", "publish"],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "footerText",
            type: "string",
            title: "Subtitle",
        },
        {
            name: "socialMediaLinks",
            type: "array",
            title: "Social Media Links",
            of: [{ type: "socialMedia" }],
        },
    ],
};
