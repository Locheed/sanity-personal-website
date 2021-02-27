export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
   {
    name: 'title',
    title: 'Title',
    type: 'string',
   },
   {
     name: 'slug',
     title: 'Slug',
     type: 'slug',
     options: {
       source: 'title'
     }
   },
   {
     name: 'content',
     title: 'Sections',
     type: 'array',
     of: [
       { type: 'hero' }
     ]
   }
  ]
}