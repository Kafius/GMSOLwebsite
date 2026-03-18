import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'Kafius/GMSOLwebsite',
    branchPrefix: 'keystatic/',
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
        title: fields.text({ label: 'Title' }),
        author: fields.text({ label: 'Author' }),
        date: fields.text({ label: 'Date', description: 'e.g. 08/10/2021' }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'main/public/images',
          publicPath: '/images/',
        }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
});
