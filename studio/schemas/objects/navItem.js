import { FaLink } from 'react-icons/fa'

export default {
  name: 'navItem',
  type: 'object',
  title: 'NavItem',
  icon: FaLink,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Link text',
    },
    {
      name: 'navItemUrl',
      type: 'link',
      title: 'Link URL',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'navItemUrl.linkUrl',
    },
  },
}
