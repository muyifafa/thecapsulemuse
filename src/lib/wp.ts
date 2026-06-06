import { POSTS, CATEGORIES, PAGES, WPPost, WPCategory, WPPage } from "../data/posts-data";

export type { WPPost, WPCategory, WPPage };

export async function getPosts(page = 1, perPage = 10, categoryId?: number): Promise<WPPost[]> {
  let filtered = POSTS;
  if (categoryId) {
    filtered = filtered.filter(post => post.categories.includes(categoryId));
  }
  
  // Sort by date descending
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const start = (page - 1) * perPage;
  return sorted.slice(start, start + perPage);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const post = POSTS.find(p => p.slug === slug);
  return post || null;
}

export async function getCategories(): Promise<WPCategory[]> {
  return CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const category = CATEGORIES.find(c => c.slug === slug);
  return category || null;
}

export async function searchPosts(query: string, page = 1, perPage = 10): Promise<WPPost[]> {
  const lowerQuery = query.trim().toLowerCase();
  if (!lowerQuery) return [];

  const filtered = POSTS.filter(
    post =>
      post.title.rendered.toLowerCase().includes(lowerQuery) ||
      post.content.rendered.toLowerCase().includes(lowerQuery) ||
      post.excerpt.rendered.toLowerCase().includes(lowerQuery)
  );

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const start = (page - 1) * perPage;
  return sorted.slice(start, start + perPage);
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const page = PAGES.find(p => p.slug === slug);
  return page || null;
}

// Helpers to extract information from embedded data
export function getFeaturedImage(post: WPPost): string {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url || "/images/placeholder.jpg";
}

export function getPostCategories(post: WPPost): Array<{ name: string; slug: string }> {
  const terms = post._embedded?.['wp:term']?.[0] || [];
  return terms
    .filter(term => term.taxonomy === "category")
    .map(term => ({ name: term.name, slug: term.slug }));
}

export function getAuthorName(post: WPPost): string {
  const author = post._embedded?.['author']?.[0];
  return author?.name || "Valerie";
}
