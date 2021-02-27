export default {
  name: 'socialMedia',
  type: 'object',
  title: 'Social Links',
  fields: [
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      options: {
        list: [
          {
            title: 'Github',
            value: 'icon-github',
          },
          {
            title: 'Instagram',
            value: 'icon-Instagram',
          },
          {
            title: 'Linkedin',
            value: 'icon-linkedin',
          },
          {
            title: 'Twitch',
            value: 'icon-twitch',
          },
          {
            title: 'Twitter',
            value: 'icon-twitter',
          },
          {
            title: 'YouTube',
            value: 'icon-youtube',
          },
        ],
      },
    },
    {
      name: 'socialLinkUrl',
      type: 'link',
      title: 'Link URL',
    },
  ],
}
