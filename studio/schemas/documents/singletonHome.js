export default {
    name: "singletonHome",
    type: "document",
    title: "Home",
    // __experimental_actions: ["update", "publish"],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "hero",
            type: "hero",
            title: "Hero section",
            options: {
                collapsible: true,
            },
        },
        {
            name: "content",
            title: "Sections",
            type: "array",
            of: [{ type: "hero" }],
        },
    ],
};
