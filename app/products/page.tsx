import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Coffee, Tag, ArrowUpRight } from "lucide-react";
import { products } from "../../data/products";

export const metadata: Metadata = {
  title: "Vessel Catalog | Professional Developer Mugs",
  description: "Browse our exclusive catalog of StackMugs. Built with high thermal integrity, developer-themed designs, and double-walled options.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-sans">
            Vessel Catalog
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
            Every software system requires a reliable storage array. Our mugs are constructed using robust materials designed to preserve temperature state and guard against thermal latency.
          </p>
        </div>

        {/* Sandbox Indicator (Helpful for SEO lessons) */}
        <div className="mt-6 rounded-lg bg-white border border-slate-200 p-4 flex items-start gap-3 shadow-xs">
          <div className="mt-0.5 rounded-md bg-slate-50 border border-slate-200 p-1.5 text-slate-700">
            <Coffee className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">SEO / Sitemap Exercise Target</p>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
              This catalog page serves as an excellent starting point for studying keyword density, internal anchor text allocation, and dynamic sitemap integration. All details below are rendered server-side.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-slate-900"
            >
              <div>
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-50 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={350}
                    height={350}
                    className="h-full w-full object-cover object-center group-hover:scale-101 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border border-slate-200">
                    {product.specs.capacity}
                  </div>
                </div>

                {/* Product Details */}
                <div className="mt-4">
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                    <Tag className="h-3 w-3" />
                    <span>{product.specs.material}</span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900 group-hover:underline decoration-slate-400 underline-offset-2">
                    <Link href={`/products/${product.slug}`}>
                      <span className="absolute inset-0 z-10" />
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-6 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">${product.price}</span>
                <span className="text-xs font-semibold text-slate-900 flex items-center gap-0.5">
                  View Specs
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Schema Note for future lesson */}
        <div className="mt-16 text-center border-t border-slate-200 pt-10">
          <p className="text-xs text-slate-400 font-mono">
            Structured Data: schema.org/Product representations will load automatically when implementing Course Module 4.
          </p>
        </div>

      </div>
    </div>
  );
}
