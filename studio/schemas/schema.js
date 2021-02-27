// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import footerSettings from "./documents/footerSettings";
import singletonHome from "./documents/singletonHome";
import blockContent from "./blockContent";
import category from "./documents/category";
import tag from "./documents/tag";
import post from "./documents/post";
import page from "./documents/page";
import author from "./documents/author";
import navigation from "./documents/navigation";
import ytVideo from "./documents/ytVideo";
// Objects
import link from "./objects/link";
import navItem from "./objects/navItem";
import socialMedia from "./objects/socialMedia";

// Plugs
import hero from "./plugs/hero";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        post,
        page,
        author,
        category,
        tag,
        hero,
        navItem,
        socialMedia,
        link,
        ytVideo,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,

        // Site settings
        footerSettings,
        navigation,

        // Singletons
        singletonHome,
    ]),
});
