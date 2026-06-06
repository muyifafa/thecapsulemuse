import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import FeaturedSlider from "@/components/FeaturedSlider";
import PostCard from "@/components/PostCard";
import { getPosts, WPPost } from "@/lib/wp";

export const revalidate = 3600; // Revalidate page every hour

export default async function HomePage() {
  let posts: WPPost[] = [];
  let errorMsg = "";

  try {
    // Fetch latest 10 posts for the homepage feed
    posts = await getPosts(1, 10);
  } catch (err) {
    console.error("Failed to load posts for homepage:", err);
    errorMsg = "Unable to load the latest fashion edits. Please check back shortly!";
  }

  // Use the latest posts for the slider
  const sliderPosts = posts.slice(0, 5);
  // Recent posts for the sidebar list
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <Header />
      
      {/* Featured Outfit Slider */}
      {sliderPosts.length > 0 && <FeaturedSlider posts={sliderPosts} />}

      <main className="max-w-7xl w-full mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Blog Post Grid */}
          <div className="flex-1 space-y-12">
            {errorMsg ? (
              <div className="text-center py-12 border border-neutral-200 bg-brand-light font-sans text-neutral-600">
                {errorMsg}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12 border border-neutral-200 bg-brand-light font-sans text-neutral-600">
                No articles found. Welcome to our new journal!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Area */}
          <Sidebar recentPosts={recentPosts} />

        </div>
      </main>

      <Footer />
    </>
  );
}
