import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchResults from "./SearchResults";

export default function SearchPage() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="max-w-7xl w-full mx-auto px-4 py-24 text-center font-sans text-neutral-500">
            Loading search…
          </div>
        }
      >
        <SearchResults />
      </Suspense>
      <Footer />
    </>
  );
}
