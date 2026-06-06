"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Search, X } from "lucide-react";



export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* 1. TOP UTILITY HEADER (Secondary Nav) */}
      <nav className="bg-brand-dark text-white text-[12px] uppercase tracking-wider font-bold">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center gap-3">
          {/* Brand Tagline */}
          <div className="tracking-widest uppercase text-[10px] md:text-[11px] text-neutral-300 font-semibold font-sans">
            Minimalist Fashion & Style Guide
          </div>

          {/* Social Icons & Search Icon */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@thecapsulemuse.com"
                className="hover:text-brand-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Separator line */}
            <div className="h-3 w-[1px] bg-neutral-700"></div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-brand-accent transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Open Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. MAIN LOGO HEADER */}
      <header className="border-b border-brand-dark py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Logo text */}
          <Link href="/" className="mb-2 group text-center block">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.2em] text-brand-dark group-hover:text-brand-accent transition-colors duration-300 block">
              THE CAPSULE MUSE
            </span>
          </Link>
          <h1 className="sr-only">The Capsule Muse</h1>
          <p className="site-description text-[14px] md:text-[16px] text-neutral-500 uppercase tracking-widest italic text-center mb-6">
            Chic, Minimalist, Inspiring.
          </p>

          {/* Primary Navigation Menu */}
          <nav className="w-full border-t border-neutral-100 pt-4 mt-2">
            <ul className="flex justify-center flex-wrap gap-8 text-[13px] md:text-[14px] font-semibold uppercase tracking-wider text-brand-dark">
              <li>
                <Link href="/" className="hover:text-brand-accent transition-colors pb-1 border-b border-transparent hover:border-brand-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/outfit-inspo" className="hover:text-brand-accent transition-colors pb-1 border-b border-transparent hover:border-brand-accent">
                  Outfit Inspo
                </Link>
              </li>
              <li>
                <Link href="/category/styling-tips" className="hover:text-brand-accent transition-colors pb-1 border-b border-transparent hover:border-brand-accent">
                  Styling Tips
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 3. INTERACTIVE OVERLAY SEARCH BOX */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-brand-dark/95 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-brand-accent transition-colors p-2 cursor-pointer"
            aria-label="Close search overlay"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-2xl text-center">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH HERE"
                className="w-full bg-transparent border-b-2 border-white pb-3 pt-1 text-2xl md:text-4xl text-center text-white placeholder-neutral-500 uppercase tracking-widest font-serif focus:outline-none focus:border-brand-accent transition-all"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 text-white hover:text-brand-accent transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </form>
            <p className="text-[12px] md:text-[14px] text-neutral-400 mt-4 uppercase tracking-widest font-sans">
              Press enter to search or click the magnifying glass
            </p>
          </div>
        </div>
      )}
    </>
  );
}
