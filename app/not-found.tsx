import React from "react";
import Link from "next/link";
import { Coffee, Search, Terminal, CornerDownRight } from "lucide-react";

export const metadata = {
  title: "404 - Vessel Index Out of Bounds | StackMug",
  description: "The requested mug or page cannot be located in the system memory arrays.",
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-16 text-center sm:px-6">
      
      {/* 404 Icon/Badge */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-md mb-8">
        <Coffee className="h-10 w-10 text-emerald-400" />
        <Search className="absolute -bottom-1 -right-1 h-6 w-6 text-emerald-500 bg-white rounded-lg p-1 border border-gray-100" />
      </div>

      {/* Main text */}
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-mono">
        404 <span className="text-gray-300">|</span> INDEX_OUT_OF_BOUNDS
      </h1>
      
      <p className="mt-4 max-w-md text-sm text-gray-500 leading-relaxed">
        The requested path could not be resolved. The pointer is referencing an unallocated memory block, or the custom ceramic mold was deleted from our storage array.
      </p>

      {/* Terminal Mock for Developer Humor */}
      <div className="mt-8 max-w-md w-full bg-gray-950 rounded-xl border border-gray-800 p-4 text-left font-mono text-xs text-gray-300 shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-gray-800 pb-2 mb-3">
          <Terminal className="h-4 w-4 text-emerald-500" />
          <span className="text-gray-500">stackmug_system_log</span>
        </div>
        <div className="space-y-1">
          <p className="text-gray-500">&gt; GET /requested-path-not-found</p>
          <p className="text-rose-500">Error: STATUS_CODE_404 (Route unmapped)</p>
          <div className="flex gap-1.5 items-center text-emerald-400 mt-2">
            <CornerDownRight className="h-3 w-3" />
            <p>Recommendation: Redirect to default entry node</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
        >
          Return to Entry Point (Home)
        </Link>
        <Link
          href="/products"
          className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Explore Valid Vessels
        </Link>
      </div>

    </div>
  );
}
