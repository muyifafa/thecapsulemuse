import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { getPageBySlug, getPosts, WPPost } from "@/lib/wp";

export const revalidate = 86400; // Cache static pages for 24 hours

export default async function AboutPage() {
  const page = await getPageBySlug("about");
  
  // Fetch recent posts for sidebar
  let recentPosts: WPPost[] = [];
  try {
    recentPosts = await getPosts(1, 5);
  } catch {}

  return (
    <>
      <Header />

      <main className="max-w-7xl w-full mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Info Block */}
          <div className="flex-1 bg-white">
            {page ? (
              <article className="space-y-8">
                <h1 className="text-[28px] md:text-[40px] font-serif font-bold text-brand-dark leading-tight border-b border-neutral-100 pb-4">
                  {page.title.rendered}
                </h1>
                <div
                  className="entry-content font-sans text-neutral-800 leading-relaxed text-[16px] md:text-[18px]"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
              </article>
            ) : (
              // Styled fallback if WordPress page cannot be retrieved
              <article className="space-y-8">
                <h1 className="text-[28px] md:text-[40px] font-serif font-bold text-brand-dark leading-tight border-b border-neutral-100 pb-4">
                  About Valerie & The Capsule Muse
                </h1>
                
                <div className="max-w-md mx-auto aspect-square overflow-hidden border border-neutral-200 mb-6 bg-neutral-50 rounded-full">
                  <img
                    src="/images/profile-avatar.png"
                    alt="Valerie - Founder of The Capsule Muse"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="entry-content space-y-6 font-sans text-neutral-700 leading-relaxed text-[16px] md:text-[18px]">
                  <p>
                    Hello, gorgeous! I'm <strong>Valerie</strong>—the designer, stylist, and founder of The Capsule Muse. 
                    I'm so thrilled you're here.
                  </p>
                  
                  <p>
                    Fashion has always been more than just the clothes we put on. To me, it's a form of self-expression, 
                    a daily source of confidence, and an art form. Over the years, I've curated clothing lines from 
                    renowned brands across Europe, Canada, and the United States to bring our customers pieces that are 
                    chic, comfortable, and unforgettable.
                  </p>
 
                  <p>
                    But finding the perfect clothes is only half the battle. Knowing how to style them, how to transition 
                    a single item from a casual workday to an elegant date night, and how to build a timeless capsule wardrobe 
                    that takes the stress out of getting dressed is where true personal style is born.
                  </p>
 
                  <p>
                    That's why I launched the The Capsule Muse Blog. It is your styling companion, filled with:
                  </p>
 
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Capsule Wardrobe Checklists</strong> to help you invest in high-quality, versatile basics.</li>
                    <li><strong>Outfit Inspiration</strong> for real-life occasions—from weekend brunches to professional meetings.</li>
                    <li><strong>Seasonal Trend Reviews</strong> and guidance on how to wear new looks in an everyday, practical way.</li>
                  </ul>
 
                  <p>
                    Thank you for joining our community. I hope these guides inspire you to express yourself and feel 
                    beautiful every single day.
                  </p>
 
                  <blockquote className="border-l-4 border-brand-dark pl-4 italic text-neutral-500 my-6">
                    "Fashion should be fun, intentional, and confidence-boosting." <br />
                    — Valerie, Founder of The Capsule Muse
                  </blockquote>
                </div>
              </article>
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
