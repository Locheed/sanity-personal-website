import S from "@sanity/desk-tool/structure-builder";
import { BlogIcon, AllIcon, AuthorIcon } from "react-icons/go";

export default S.listItem()
    .title("Blog")
    .icon(BlogIcon)
    .child(
        S.list()
            .title("/Blog")
            .items([
                S.listItem()
                    .title("Published posts")
                    .schemaType("post")
                    .icon(BlogIcon)
                    .child(
                        S.documentList("post")
                            .title("Published posts")
                            .menuItems(
                                S.documentTypeList("post").getMenuItems()
                            )
                            .filter(
                                `_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))`
                            )
                            .child((documentId) =>
                                S.document()
                                    .documentId(documentId)
                                    .schemaType("post")
                            )
                    ),
                S.documentTypeListItem("post").title("All posts").icon(AllIcon),
                S.listItem()
                    .title("Posts by category")
                    .child(
                        // List out all categories
                        S.documentTypeList("category")
                            .title("Posts by category")
                            .child((catId) =>
                                // List out project documents where the _id for the selected
                                // category appear as a _ref in the project’s categories array
                                S.documentList()
                                    .schemaType("post")
                                    .title("Posts")
                                    .filter(
                                        '_type == "post" && $catId in categories[]._ref'
                                    )
                                    .params({ catId })
                            )
                    ),
                S.listItem()
                    .title("Posts by tag")
                    .child(
                        // List out all categories
                        S.documentTypeList("tag")
                            .title("Posts by tag")
                            .child((tagId) =>
                                // List out project documents where the _id for the selected
                                // category appear as a _ref in the project’s categories array
                                S.documentList()
                                    .schemaType("post")
                                    .title("Posts")
                                    .filter(
                                        '_type == "post" && $tagId in tags[]._ref'
                                    )
                                    .params({ tagId })
                            )
                    ),
                S.divider(),
                S.documentTypeListItem("author")
                    .title("Authors")
                    .icon(AuthorIcon),
                S.documentTypeListItem("category").title("Categories"),
                S.documentTypeListItem("tag").title("Tags"),
            ])
    );
