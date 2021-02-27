import S from "@sanity/desk-tool/structure-builder";

import { GoHome } from "react-icons/go";
import siteSettings from "./src/structure/siteSettings";
import blog from "./src/structure/blog";

const removeFromSideBar = [
    "footerSettings",
    "singletonHome",
    "navigation",
    "author",
    "category",
    "post",
    "tag",
];

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Home")
                .icon(GoHome)
                .child(
                    S.editor()
                        .id("singletonHome")
                        .schemaType("singletonHome")
                        .documentId("singletonHome")
                ),
            // Add a visual divider (optional)
            S.divider(),
            blog,
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) => !removeFromSideBar.includes(listItem.getId())
            ),
            // Add a visual divider (optional)
            S.divider(),
            siteSettings,
        ]);
