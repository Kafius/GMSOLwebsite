import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'Kafius/GMSOLwebsite',
    branchPrefix: 'keystatic/',
    clientId: import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    secret: import.meta.env.KEYSTATIC_SECRET,
  },
  ui: {
    brand: { name: 'GMS' },
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'main/src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.text({ label: 'Author' }),
        date: fields.text({ label: 'Date', description: 'e.g. 08/10/2021' }),
        image: fields.text({ label: 'Image Path', description: 'e.g. /images/photo.jpg' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
