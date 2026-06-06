"use client";

import { useEffect } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { WPPost, getFeaturedImage, getPostCategories } from "@/lib/wp";

interface FeaturedSliderProps {
  posts: WPPost[];
}

export default function FeaturedSlider({ posts }: FeaturedSliderProps) {
  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  // Autoplay functionality using setInterval
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="bg-brand-light border-b border-neutral-200 py-2">
      <div className="max-w-7xl mx-auto overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {posts.map((post) => {
            const featuredImage = getFeaturedImage(post);
            const categories = getPostCategories(post);

            return (
              <div
                key={post.id}
                className="flex-none w-full sm:w-1/2 md:w-1/3 px-2 py-4 relative group"
              >
                <div className="bg-white border border-neutral-200 overflow-hidden relative aspect-3/4 flex flex-col justify-end">
                  
                  {/* Background Image */}
                  <img
                    src={featuredImage}
                    alt={post.title.rendered}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Card Content Overlay */}
                  <div className="relative z-10 p-6 text-white text-center space-y-2">
                    {/* Categories */}
                    {categories.length > 0 && (
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-neutral-300">
                        {categories.map((c) => c.name).join(" + ")}
                      </div>
                    )}

                    {/* Post Title */}
                    <h3 className="text-[16px] md:text-[18px] font-serif font-bold leading-tight hover:text-brand-accent transition-colors">
                      <Link href={`/posts/${post.slug}`} className="block">
                        {post.title.rendered}
                      </Link>
                    </h3>

                    {/* Action Button */}
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="inline-block bg-white text-brand-dark px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-colors"
                      >
                        View Outfit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
