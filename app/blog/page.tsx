import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/blog";

export const metadata: Metadata = {
  title: "Tech Blog | Coffee, Compilers & Code",
  description: "Read the latest engineering articles on developer focus, caffeine optimization ratios, and morning git command checklists.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-sans">
            The StackMug Blog
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
            Written by developers, for developers. We explore the deep, technical intersections between warm beverages, nervous systems, and programming workflows.
          </p>
        </div>

        {/* Learning Sandbox Pointer */}
        <div className="mt-6 rounded-lg bg-white border border-slate-200 p-4 flex items-start gap-3 shadow-xs">
          <div className="mt-0.5 rounded-md bg-slate-50 border border-slate-200 p-1.5 text-slate-700">
            <BookOpen className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">SEO / XML Sitemap Sandbox target</p>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
              Blog layouts are prime targets for sitemap optimization and RSS feed construction exercises. The list below uses Next.js static asset loaders to maintain fast Core Web Vitals (LCP/FID).
            </p>
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between bg-white rounded-xl border border-slate-200 p-6 shadow-xs transition-all hover:border-slate-900"
            >
              <div>
                {/* Optional visual placeholder for blog */}
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-50 mb-6 relative border border-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-101 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 hover:underline decoration-slate-400 underline-offset-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">By: {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:opacity-85"
                >
                  Read full article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
