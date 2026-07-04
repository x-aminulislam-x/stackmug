import { ArrowRight, BookOpen, Code, Coffee, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../data/blog';
import { products } from '../data/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Headings & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 mb-6 w-fit">
                <Sparkles className="h-3.5 w-3.5 text-slate-400" />
                <span>Engineered for Compiled Workflows</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl font-sans">
                Never Let Your Coffee{' '}
                <span className="font-mono text-slate-400 font-normal">De-optimize</span>
              </h1>
              <p className="mt-6 text-base text-slate-500 leading-relaxed max-w-xl">
                High-performance, type-safe ceramic mugs and double-walled borosilicate cups
                designed specifically for programmers, system architects, and tech creators.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/products"
                  className="rounded-lg bg-slate-900 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  Browse Catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>

            {/* Right Col: Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[400px] aspect-square rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm flex items-center justify-center overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/strictly-typed/600/600"
                  alt="StackMug Featured Strictly Typed Mug"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-lg p-3 border border-slate-200/50 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">The Strictly Typed Mug</p>
                    <p className="text-[10px] text-slate-400 font-mono">Capacity: 15 oz</p>
                  </div>
                  <span className="text-sm font-extrabold text-slate-900">$24.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / USP Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Why Engineers Choose StackMug
            </h2>
            <p className="mt-4 text-slate-500 text-sm">
              We compile ergonomic design, high-quality materials, and developer humor into everyday
              workflow tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 mb-6 border border-slate-200">
                <Coffee className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Maximum Thermal Efficiency</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Our triple-glazed ceramics and custom stoneware prevent thermal decay, keeping your
                beverage in the Optimal Drinking Window (ODW) longer.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 mb-6 border border-slate-200">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Thematic Syntax Layout</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Mugs engraved with precise, humor-driven code block syntaxes that resonate with
                full-stack developers and compiler architects alike.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 mb-6 border border-slate-200">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Strictly Local Cache</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                No complex authentication systems or databases. Fully optimized for instant physical
                use right out of the cabinet (offline first!).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                Featured Vessels
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Pick the perfect container for your beverage runtime.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-slate-500 underline underline-offset-4 decoration-slate-300"
            >
              See all mugs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map(product => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-slate-900 shadow-sm"
              >
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-50 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center group-hover:scale-101 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded border border-slate-200">
                    {product.specs.capacity}
                  </div>
                </div>
                <div className="mt-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:underline decoration-slate-400 underline-offset-2">
                      <Link href={`/products/${product.slug}`}>
                        <span className="absolute inset-0 z-10" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {product.specs.material}
                    </span>
                    <span className="text-sm font-bold text-slate-900">${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Grid */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                From the Tech Blog
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Read about caffeine engineering and morning productivity loops.
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-slate-500 underline underline-offset-4 decoration-slate-300"
            >
              Read full blog
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <article
                key={post.slug}
                className="flex flex-col justify-between bg-white rounded-xl border border-slate-200 p-6 transition-all hover:border-slate-900 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 hover:underline decoration-slate-400 underline-offset-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">By {post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:opacity-85"
                  >
                    Read article
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section / SEO placeholder block */}
      <section className="py-24 text-center bg-slate-900 text-white relative">
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Join the Clean Coffee Coalition
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-xs text-slate-300 leading-relaxed font-mono uppercase tracking-wider">
            No dynamic marketing algorithms. Just well-designed mugs.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/products"
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
