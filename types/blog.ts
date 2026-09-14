export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  readTime: number;
}
