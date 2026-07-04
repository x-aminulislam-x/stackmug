import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { ChevronLeft, Calendar, Clock, User, BookOpen } from "lucide-react";
import { blogPosts } from "../../../data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The specified blog post does not exist.",
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#F8FAFC] py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Articles
          </Link>
        </div>

        {/* Post Metadata */}
        <header className="border-b border-slate-200 pb-8 mb-8">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-sans">
            {post.title}
          </h1>
        </header>

        {/* Feature Image */}
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-2 mb-10 relative shadow-xs">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover rounded-lg"
            priority
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Post Content using react-markdown and prose styling */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-xs sm:text-sm">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* SEO Roadmap Module Sandbox Insight */}
        <div className="mt-16 rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
          <h3 className="text-xs font-bold text-slate-900 font-mono flex items-center gap-1.5 uppercase tracking-wider">
            <BookOpen className="h-4 w-4 text-slate-500" />
            SEO Roadmap: Structured Article Schema
          </h3>
          <p className="text-[11px] text-slate-500 leading-relaxed mt-2">
            This page provides the ideal location for a <code className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-[10px] text-slate-800">schema.org/TechArticle</code> or <code className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-[10px] text-slate-800">BlogPosting</code> structured data JSON block. Adding structured data enables search engines to display publication dates, authors, and reading times directly in standard Rich Snippets.
          </p>
        </div>

      </div>
    </article>
  );
}
