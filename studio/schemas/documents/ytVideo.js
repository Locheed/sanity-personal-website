export default {
    name: "ytVideo",
    type: "document",
    title: "Videos",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Video Title",
        },
        {
            name: "link",
            type: "string",
            title: "Video Link",
        },
        {
            name: "coverImage",
            type: "image",
            title: "Cover Image",
            options: {
                hotspot: true,
            },
        },
    ],
};
