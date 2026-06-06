import Link from "next/link";
import { WPPost, getFeaturedImage, getPostCategories } from "@/lib/wp";

interface PostCardProps {
  post: WPPost;
}

export default function PostCard({ post }: PostCardProps) {
  const categories = getPostCategories(post);
  const featuredImage = getFeaturedImage(post);
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="border border-neutral-100 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Cover Image */}
      <Link href={`/posts/${post.slug}`} className="relative block aspect-3/2 overflow-hidden bg-neutral-100 group">
        <img
          src={featuredImage}
          alt={post.title.rendered}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />
      </Link>

      <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
        {/* Categories joined by '+' */}
        {categories.length > 0 && (
          <div className="text-[11px] md:text-[12px] uppercase tracking-wider font-semibold text-neutral-500 mb-3 font-sans">
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

        {/* Date */}
        <p className="text-[11px] uppercase tracking-wider text-neutral-400 mb-4 font-sans font-medium">
          {dateFormatted}
        </p>

        {/* Title */}
        <h2 className="text-[20px] md:text-[24px] font-serif font-bold leading-tight mb-4 text-brand-dark hover:text-brand-accent transition-colors">
          <Link href={`/posts/${post.slug}`}>
            {post.title.rendered}
          </Link>
        </h2>

        {/* Excerpt */}
        <div
          className="text-neutral-500 text-[14px] md:text-[15px] leading-relaxed mb-6 flex-grow font-sans line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />

        {/* Read More button */}
        <div className="pt-2 mt-auto">
          <Link
            href={`/posts/${post.slug}`}
            className="inline-block bg-brand-dark text-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider hover:bg-transparent hover:text-brand-dark border border-brand-dark transition-all duration-200 cursor-pointer"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
