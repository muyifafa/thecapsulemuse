"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Search } from "lucide-react";



export default function Footer() {
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
    <footer className="bg-brand-light text-brand-dark pt-16 pb-8 border-t border-neutral-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-neutral-300">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-[14px] uppercase tracking-wider font-bold border-b border-brand-dark pb-2 inline-block">
              The Capsule Muse
            </h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed font-sans">
              Founded by Valerie, The Capsule Muse is a boutique editorial blog dedicated to styling guides, capsule wardrobes, and fashion inspiration for the modern, confident woman.
            </p>
          </div>

          {/* Column 2: Legal/Disclaimers */}
          <div className="space-y-4">
            <h3 className="text-[14px] uppercase tracking-wider font-bold border-b border-brand-dark pb-2 inline-block">
              The Brand
            </h3>
            <nav className="flex flex-col space-y-2 text-[14px] font-medium text-neutral-700">
              <Link href="/about" className="hover:text-brand-accent transition-colors">
                About
              </Link>
              <Link href="/disclosure-policy" className="hover:text-brand-accent transition-colors">
                Disclaimer and Disclosure Policy
              </Link>
              <Link href="/privacy-policy-2" className="hover:text-brand-accent transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Column 3: Social follow & Search */}
          <div className="space-y-6">
            <div>
              <h3 className="text-[14px] uppercase tracking-wider font-bold border-b border-brand-dark pb-2 inline-block mb-4">
                Connect With Us
              </h3>
              <div className="flex items-center gap-4 text-brand-dark">
                <a
                  href="mailto:hello@thecapsulemuse.com"
                  className="hover:text-brand-accent transition-colors p-2 bg-white rounded-full shadow-xs border border-neutral-200 hover:scale-105"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Search Widget */}
            <form onSubmit={handleSearchSubmit} className="relative w-full max-w-sm">
              <input
                type="search"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-neutral-300 px-4 py-2 text-[14px] focus:outline-none focus:border-brand-dark text-brand-dark font-sans placeholder-neutral-400"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-neutral-500 hover:text-brand-dark transition-colors cursor-pointer"
                aria-label="Submit Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright information */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[12px] md:text-[13px] text-neutral-500 gap-4 font-sans">
          <p>© {new Date().getFullYear()} The Capsule Muse. All rights reserved.</p>
          <p>
            Nessa Theme Recreated in Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
