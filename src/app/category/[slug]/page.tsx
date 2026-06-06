import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import { getPosts, getCategoryBySlug, WPPost } from "@/lib/wp";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Wait for dynamic parameters
  const { slug } = await params;

  // 1. Fetch category info
  const category = await getCategoryBySlug(slug);
  if (!category) {
    notFound();
  }

  // 2. Fetch posts belonging to this category
  let posts: WPPost[] = [];
  let errorMsg = "";
  try {
    posts = await getPosts(1, 20, category.id);
  } catch (err) {
    console.error("Failed to load category posts:", err);
    errorMsg = "Unable to load articles for this style category.";
  }

  // 3. Fetch recent posts for the sidebar (all categories)
  let recentPosts: WPPost[] = [];
  try {
    recentPosts = await getPosts(1, 5);
  } catch {}

  return (
    <>
      <Header />

      {/* Archive Category Header banner */}
      <div className="bg-brand-light border-b border-neutral-200 py-10 md:py-14 text-center">
        <p className="text-[11px] md:text-[12px] uppercase tracking-widest font-sans font-bold text-neutral-400 mb-2">
          Category Archive
        </p>
        <h1 className="text-[28px] md:text-[36px] font-serif font-bold text-brand-dark uppercase tracking-wide">
          {category.name}
        </h1>
        <p className="text-[13px] md:text-[14px] text-neutral-500 font-sans mt-2">
          {category.count} {category.count === 1 ? "Article" : "Articles"} Published
        </p>
      </div>

      <main className="max-w-7xl w-full mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filtered Post Feed */}
          <div className="flex-1 space-y-12">
            {errorMsg ? (
              <div className="text-center py-12 border border-neutral-200 bg-brand-light font-sans text-neutral-600">
                {errorMsg}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12 border border-neutral-200 bg-brand-light font-sans text-neutral-600">
                No edits found in this category. We are working on new styles!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <Sidebar recentPosts={recentPosts} />

        </div>
      </main>

      <Footer />
    </>
  );
}
