export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: BlogSection[];
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  sources?: { title: string; url: string }[];
}
