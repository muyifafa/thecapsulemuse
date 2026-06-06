import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { getPageBySlug, getPosts, WPPost } from "@/lib/wp";

export const revalidate = 86400; // Cache static pages for 24 hours

export default async function PrivacyPolicyPage() {
  const page = await getPageBySlug("privacy-policy-2") || await getPageBySlug("privacy-policy");
  
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
              // Fallback Privacy Policy layout
              <article className="space-y-8">
                <h1 className="text-[28px] md:text-[40px] font-serif font-bold text-brand-dark leading-tight border-b border-neutral-100 pb-4">
                  Privacy Policy
                </h1>
                
                <div className="entry-content space-y-6 font-sans text-neutral-700 leading-relaxed text-[16px] md:text-[18px]">
                  <p>
                    Your privacy is extremely important to us. It is The Capsule Muse's policy to respect your privacy regarding 
                    any information we may collect from you across our website, <a href="/">The Capsule Muse Blog</a>, 
                    and other sites we own and operate.
                  </p>
                  
                  <h2 className="text-[20px] font-bold font-serif text-brand-dark mt-6">1. Information We Collect</h2>
                  <p>
                    We only ask for personal information when we truly need it to provide a service to you (for example, when you sign 
                    up to our newsletter). We collect it by fair and lawful means, with your knowledge and consent. We also let you 
                    know why we’re collecting it and how it will be used.
                  </p>

                  <h2 className="text-[20px] font-bold font-serif text-brand-dark mt-6">2. Use of Information</h2>
                  <p>
                    We only retain collected information for as long as necessary to provide you with your requested service. What data 
                    we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized 
                    access, disclosure, copying, use, or modification.
                  </p>

                  <h2 className="text-[20px] font-bold font-serif text-brand-dark mt-6">3. Cookies and Analytics</h2>
                  <p>
                    We may use cookies to understand site usage and improve content. Our blog may also integrate Google Analytics 
                    and other tracker APIs to study user preferences and deliver better article layouts. You are free to refuse cookies 
                    through your browser settings, though it may limit some features.
                  </p>

                  <h2 className="text-[20px] font-bold font-serif text-brand-dark mt-6">4. Contact Information</h2>
                  <p>
                    If you have any questions about how we handle user data and personal information, feel free to contact us 
                    at <strong>hello@thecapsulemuse.com</strong>.
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
