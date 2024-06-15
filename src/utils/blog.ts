import { getCollection } from 'astro:content';

export async function getBlogItems() {
  try {
    const items = await getCollection('blog', ({ data }) => !data.draft);
    return items.sort(
      (a, b) =>
          Math.floor(new Date(b.data.publishDate ?? b.data.publishDate).getTime() / 1000) -
          Math.floor(new Date(a.data.publishDate ?? a.data.publishDate).getTime() / 1000),
    );
  } catch (e) {
    console.log(e)
    return []
  }
}

export default {
  getBlogItems
}
