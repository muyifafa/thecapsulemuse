import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { getPostBySlug, getPosts, getFeaturedImage, getPostCategories, getAuthorName, WPPost } from "@/lib/wp";
import { POSTS } from "@/data/posts-data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Pre-render one static page per post for `output: export`
export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  // Wait for dynamic parameters
  const { slug } = await params;

  // 1. Fetch single post details
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // 2. Fetch recent posts for the sidebar list
  let recentPosts: WPPost[] = [];
  try {
    recentPosts = await getPosts(1, 5);
  } catch {}

  const categories = getPostCategories(post);
  const featuredImage = getFeaturedImage(post);
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const authorName = getAuthorName(post);

  return (
    <>
      <Header />

      <main className="max-w-7xl w-full mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Content */}
          <article className="flex-1 min-w-0 bg-white">
            
            {/* Header Area */}
            <header className="text-center mb-8">
              {/* Category tags */}
              {categories.length > 0 && (
                <div className="text-[11px] md:text-[12px] uppercase tracking-widest font-semibold text-neutral-500 mb-3 font-sans">
                  {categories.map((cat, idx) => (
                    <span key={cat.slug}>
                      <Link href={`/category/${cat.slug}`} className="hover:text-brand-accent transition-colors">
                        {cat.name}
                      </Link>
                      {idx < categories.length - 1 && <span className="mx-2 text-neutral-300 font-light">+</span>}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-[28px] md:text-[40px] font-serif font-bold text-brand-dark leading-tight mb-4 max-w-4xl mx-auto">
                {post.title.rendered}
              </h1>

              {/* Meta information */}
              <div className="text-[11px] md:text-[12px] uppercase tracking-wider text-neutral-400 font-sans font-medium flex items-center justify-center gap-2">
                <span>BY {authorName}</span>
                <span>•</span>
                <time dateTime={post.date}>{dateFormatted}</time>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-16/10 mb-10 w-full overflow-hidden border border-neutral-100 bg-neutral-50">
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Formatted body text rendered from raw WordPress HTML */}
            <div
              className="entry-content font-sans text-neutral-800 leading-relaxed max-w-none text-[16px] md:text-[18px]"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Divider */}
            <hr className="my-12 border-neutral-200" />
            
          </article>

          {/* Sidebar */}
          <Sidebar recentPosts={recentPosts} />

        </div>
      </main>

      <Footer />
    </>
  );
}
