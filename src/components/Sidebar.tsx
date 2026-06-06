"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Search } from "lucide-react";
import { WPPost } from "@/lib/wp";



interface SidebarProps {
  recentPosts: WPPost[];
}

export default function Sidebar({ recentPosts }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-12">
      
      {/* 1. HELLO GORGEOUS PROFILE CARD */}
      <section className="bg-brand-light p-8 text-center border border-neutral-100 shadow-xs">
        <h4 className="text-[20px] font-serif font-bold uppercase tracking-wider mb-4">
          Hello Gorgeous!
        </h4>
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-brand-dark">
          <img
            src="/images/profile-avatar.png"
            alt="Valerie Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[14px] text-neutral-600 leading-relaxed font-sans mb-2 font-medium">
          Welcome to The Capsule Muse ✨
        </p>
        <p className="text-[14px] text-neutral-600 leading-relaxed font-sans">
          I'm Valerie — the creative mind and curator behind The Capsule Muse. My passion is helping modern women discover the power of a streamlined, intentional wardrobe. Join me as I share classic outfit combinations, seasonal capsule guides, and simple styling secrets to elevate your everyday look with ease.
        </p>
      </section>

      {/* 2. SIDEBAR SEARCH */}
      <section className="border border-neutral-200 p-6 bg-white">
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="search"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-neutral-300 px-4 py-3 text-[14px] focus:outline-none focus:border-brand-dark text-brand-dark font-sans placeholder-neutral-400"
          />
          <button
            type="submit"
            className="absolute right-4 top-3.5 text-neutral-500 hover:text-brand-dark transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </section>

      {/* 3. FOLLOW US SOCIALS */}
      <section className="text-center space-y-4">
        <h3 className="text-[16px] font-serif font-bold uppercase tracking-wider text-neutral-800 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-brand-dark after:mx-auto after:mt-2">
          Get in Touch
        </h3>
        <div className="pt-2">
          <a
            href="mailto:hello@thecapsulemuse.com"
            className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white hover:bg-brand-accent hover:text-white transition-colors duration-300 w-full py-3 text-[12px] font-bold uppercase tracking-widest border border-brand-dark hover:border-brand-accent font-sans"
          >
            <Mail className="w-4 h-4" /> Send Valerie an Email
          </a>
        </div>
      </section>

      {/* 4. RECENT POSTS */}
      {recentPosts && recentPosts.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-[16px] font-serif font-bold uppercase tracking-wider text-neutral-800 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-brand-dark after:mx-auto after:mt-2 text-center">
            Recent Posts
          </h3>
          <ul className="divide-y divide-neutral-200 font-sans text-[14px]">
            {recentPosts.map((post) => (
              <li key={post.id} className="py-3">
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-neutral-700 hover:text-brand-accent transition-colors font-medium block leading-snug"
                >
                  {post.title.rendered}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      
    </aside>
  );
}
