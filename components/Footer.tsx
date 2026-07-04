import React from "react";
import Link from "next/link";
import { Coffee, Code, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 hover:opacity-95">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm">
                <Coffee className="h-4 w-4" />
              </div>
              <span className="font-mono text-base font-extrabold tracking-wider text-slate-900">
                STACK<span className="text-slate-400 font-normal">MUG</span>
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              High-performance, type-safe vessels engineered specifically for software developers, backend architects, and coffee aficionados.
            </p>
          </div>

          {/* Catalog Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Products</h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/products/strictly-typed-mug" className="hover:text-slate-900 transition-colors">
                  Strictly Typed Mug
                </Link>
              </li>
              <li>
                <Link href="/products/git-push-force-vessel" className="hover:text-slate-900 transition-colors">
                  git push --force Vessel
                </Link>
              </li>
              <li>
                <Link href="/products/infinite-loop-espresso" className="hover:text-slate-900 transition-colors">
                  Infinite Loop Espresso Set
                </Link>
              </li>
              <li>
                <Link href="/products/binary-overflow-stein" className="hover:text-slate-900 transition-colors">
                  Binary Overflow Stein
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Links & Learning Sandbox Room */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 font-mono">SEO Sandbox Modules</h3>
            <div className="mt-4 space-y-2 text-xs text-slate-400">
              <p>✔ Structured Data (JSON-LD)</p>
              <p>✔ Open Graph Tags (OG/Meta)</p>
              <p>✔ XML Sitemap & robots.txt</p>
              <p>✔ Canonicalization & SEO Metrics</p>
              <p className="text-slate-600 text-[10px] font-semibold mt-2">Ready for dynamic implementation</p>
            </div>
          </div>

          {/* Policy and Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-slate-900 transition-colors">
                  About StackMug
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-slate-900 transition-colors">
                  Tech Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} StackMug Co. This is an educational sandbox built for SEO curriculum training.</p>
          <div className="flex items-center gap-1">
            <Code className="h-3 w-3 text-slate-500" />
            <span>Built with type safety &</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            <span>for development teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
