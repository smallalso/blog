// 1. 从 `astro:content` 导入
import { z, defineCollection } from 'astro:content';
// 2. 定义集合
const blogCollection = defineCollection({
  type: 'content',
  schema:z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    modDatetime: z.date().optional().nullable(),
    readingTime: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    canonicalURL: z.string().optional(),
  })
});
// 3. 导出一个 `collections` 对象来注册集合
export const collections = {
  'blog': blogCollection, // 这个键应该与 `src/content` 中的集合目录名匹配
};