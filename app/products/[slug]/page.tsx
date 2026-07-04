import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ChevronLeft, CheckCircle2, Activity } from "lucide-react";
import { products } from "../../../data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The specified mug or vessel does not exist in our system registry.",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
  };
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#F8FAFC] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Catalog
          </Link>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 aspect-square flex items-center justify-center shadow-xs">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-lg object-cover h-full w-full max-h-[500px]"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Info & Details */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-800 shadow-xs mb-4">
              <Activity className="h-3.5 w-3.5 text-slate-500" />
              <span>Available Static Item</span>
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
              {product.name}
            </h1>
            
            <p className="mt-4 text-2xl font-extrabold text-slate-900">${product.price}</p>

            <div className="mt-6 border-t border-b border-slate-200 py-6">
              <h2 className="sr-only">Description</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Core Features */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 font-mono">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="h-4.5 w-4.5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vessel Specs */}
            <div className="mt-10 rounded-xl bg-white border border-slate-200 p-6 shadow-xs">
              <h3 className="text-xs font-bold text-slate-900 font-mono tracking-wider uppercase">System Specs</h3>
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="border-b border-slate-100 pb-2">
                  <dt className="text-slate-400">Material</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{product.specs.material}</dd>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <dt className="text-slate-400">Capacity</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{product.specs.capacity}</dd>
                </div>
                <div className="border-b border-slate-100 pb-2 sm:border-0 sm:pb-0">
                  <dt className="text-slate-400">Care Instructions</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{product.specs.care}</dd>
                </div>
                <div className="border-b border-slate-100 pb-2 sm:border-0 sm:pb-0">
                  <dt className="text-slate-400">Assembly Node</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{product.specs.origin}</dd>
                </div>
              </dl>
            </div>

            {/* SEO Learning Tips Block */}
            <div className="mt-8 border border-slate-200 bg-white rounded-xl p-4 shadow-xs">
              <p className="text-xs font-semibold text-slate-900">SEO Roadmap Insight</p>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                Notice the <code className="bg-slate-100 px-1 py-0.5 rounded text-[10px] text-slate-800 border border-slate-200/50">generateMetadata</code> export in this page. During the upcoming modules, we will inject a schema JSON-LD block right below to help Google match your product parameters inside Search Result Snippets automatically.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
