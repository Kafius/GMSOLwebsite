import { sanityClient } from './sanity';

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  date: string;
  image: string;
}

export interface PostWithContent extends Post {
  content: any[];
}

export function getAllPosts(): Promise<Post[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(date desc) { _id, title, slug, author, date, image }`
  );
}

export function getPostBySlug(slug: string): Promise<PostWithContent> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] { _id, title, slug, author, date, image, content }`,
    { slug }
  );
}
