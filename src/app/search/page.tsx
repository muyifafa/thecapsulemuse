import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import { searchPosts, getPosts, WPPost } from "@/lib/wp";
import { Search } from "lucide-react";

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export const revalidate = 600; // Search pages cached for 10 mins

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // Wait for search parameters
  const { q: query = "" } = await searchParams;

  let posts: WPPost[] = [];
  let errorMsg = "";
  
  if (query.trim()) {
    try {
      posts = await searchPosts(query.trim());
    } catch (err) {
      console.error("Search fetch failed:", err);
      errorMsg = "Unable to perform search. Please try again.";
    }
  }

  // Fetch recent posts for sidebar
  let recentPosts: WPPost[] = [];
  try {
    recentPosts = await getPosts(1, 5);
  } catch {}

  return (
    <>
      <Header />

      {/* Search Result Banner */}
      <div className="bg-brand-light border-b border-neutral-200 py-10 md:py-14 text-center">
        <p className="text-[11px] md:text-[12px] uppercase tracking-widest font-sans font-bold text-neutral-400 mb-2">
          Search Results
        </p>
        <h1 className="text-[28px] md:text-[36px] font-serif font-bold text-brand-dark uppercase tracking-wide">
          {query.trim() ? `"${query}"` : "Search Our Blog"}
        </h1>
        {query.trim() && (
          <p className="text-[13px] md:text-[14px] text-neutral-500 font-sans mt-2">
            Found {posts.length} {posts.length === 1 ? "Result" : "Results"}
          </p>
        )}
      </div>

      <main className="max-w-7xl w-full mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Feed area */}
          <div className="flex-1 space-y-12">
            
            {/* Inline search box if no query, or to refine */}
            {!query.trim() && (
              <div className="max-w-xl mx-auto py-12 text-center space-y-6">
                <p className="font-serif text-[18px] text-neutral-600">
                  Looking for a specific style tip or capsule check-list?
                </p>
                <form action="/search" method="get" className="relative">
                  <input
                    type="search"
                    name="q"
                    placeholder="Type search terms..."
                    className="w-full border border-neutral-300 px-4 py-3 pr-12 text-[14px] focus:outline-none focus:border-brand-dark text-brand-dark font-sans"
                  />
                  <button
                    type="submit"
                    className="absolute right-4 top-3.5 text-neutral-500 hover:text-brand-dark transition-colors cursor-pointer"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* Results output */}
            {query.trim() && (
              <>
                {errorMsg ? (
                  <div className="text-center py-12 border border-neutral-200 bg-brand-light font-sans text-neutral-600">
                    {errorMsg}
                  </div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="text-neutral-500 font-sans">
                      We couldn't find any outfits matching "{query}". Try searching other terms like "spring", "capsule", or "date".
                    </div>
                    {/* Inline fallback search */}
                    <div className="max-w-md mx-auto pt-4">
                      <form action="/search" method="get" className="relative">
                        <input
                          type="search"
                          name="q"
                          placeholder="Search again..."
                          className="w-full border border-neutral-300 px-4 py-2 pr-12 text-[14px] focus:outline-none focus:border-brand-dark text-brand-dark font-sans"
                        />
                        <button
                          type="submit"
                          className="absolute right-4 top-2.5 text-neutral-500 hover:text-brand-dark transition-colors cursor-pointer"
                          aria-label="Search"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                )}
              </>
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
