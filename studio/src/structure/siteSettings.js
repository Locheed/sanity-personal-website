import { GoSettings } from "react-icons/go";
import S from "@sanity/desk-tool/structure-builder";
import { MdMenu } from "react-icons/md";

export default S.listItem()
    // Main title of sidebar
    .title("Site Settings")
    .icon(GoSettings)
    .child(
        S.list()
            // Second column title
            .title("Site Settings")
            .items([
                // List of the items in second column
                S.listItem()
                    .title("Navigation Menus")
                    .icon(MdMenu)
                    .schemaType("navigation")
                    .child(
                        // Third column title
                        S.documentTypeList("navigation").title("List of Menus")
                    ),
                S.listItem().title("Footer").child(
                    // Third column title
                    S.editor()
                        .schemaType("footerSettings")
                        .documentId("footerSettings")
                ),
            ])
    );
