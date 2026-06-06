import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { getPageBySlug, getPosts, WPPost } from "@/lib/wp";

export const revalidate = 86400; // Cache static pages for 24 hours

export default async function DisclosurePolicyPage() {
  const page = await getPageBySlug("disclosure-policy") || await getPageBySlug("disclosure-policy-2");
  
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
          
          {/* Main Content Info */}
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
              // Fallback Disclaimer and Disclosure Policy layout
              <article className="space-y-8">
                <h1 className="text-[28px] md:text-[40px] font-serif font-bold text-brand-dark leading-tight border-b border-neutral-100 pb-4">
                  Disclaimer and Disclosure Policy
                </h1>
                
                <div className="entry-content space-y-6 font-sans text-neutral-700 leading-relaxed text-[16px] md:text-[18px]">
                  <p>
                    The Capsule Muse is a curated blog dedicated to clothing, styling tips, and outfit ideas. In compliance with the FTC 
                    guidelines, please note that we may receive compensation through affiliate links, sponsorships, or advertisements 
                    featured on this blog.
                  </p>
                  
                  <h2 className="text-[20px] font-bold font-serif text-brand-dark mt-6">Affiliate Disclosures</h2>
                  <p>
                    Some links on this blog are affiliate links. This means that if you click on the link and make a purchase from the 
                    boutique or our partner brands (like Amazon or rewardStyle/LTK), we may receive a small commission at no additional 
                    cost to you. We only recommend products, clothes, and brands that we genuinely love and think you will enjoy!
                  </p>
 
                  <h2 className="text-[20px] font-bold font-serif text-brand-dark mt-6">Sponsorship and Reviews</h2>
                  <p>
                    Any sponsored posts, brand reviews, or gifted items will be explicitly disclosed within the article text. All opinions 
                    expressed on the The Capsule Muse blog are entirely our own. We value your trust and strive to be honest, authentic, 
                    and transparent in everything we write.
                  </p>
 
                  <h2 className="text-[20px] font-bold font-serif text-brand-dark mt-6">Contact Us</h2>
                  <p>
                    If you have any questions regarding our disclaimer or disclosure policy, please don't hesitate to reach out to 
                    us at <strong>hello@thecapsulemuse.com</strong>.
                  </p>
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
