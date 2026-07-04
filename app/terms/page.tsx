import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | StackMug Sandbox",
  description: "Read the StackMug Terms of Service. Clear, structured agreements regarding intellectual property, mock checkout parameters, and code reuse rules.",
};

export default function TermsPage() {
  const lastUpdated = "July 3, 2026";

  return (
    <div className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-slate-400 font-mono">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Block */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 space-y-6 leading-relaxed">
          <p>
            Welcome to <strong>StackMug</strong> (fictional company). Please read these Terms of Service carefully before utilizing this application, which is a <strong>simulated sandbox project</strong> for SEO training modules.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">1. Acceptable Use Policy</h2>
          <p>
            This application is designed for local or preview container use as part of an educational course. You are permitted to modify, refactor, and deploy clones of this repository for private educational study, portfolio displays, and homework validation submissions.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">2. Fictional Commercial Disclaimers</h2>
          <p>
            All products displayed in our <code className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-xs font-mono text-slate-800">/products</code> catalog are fictional designs. No physical inventory exists, and there is no financial transaction process or credit card checkout flow. Any actions mimicking a checkout process are purely simulator mocks.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">3. Intellectual Property and Code Re-Use</h2>
          <p>
            The blog content and copy are mock creations designed to test keyword ranking algorithms. The React/Next.js codebase layout may be reused as a template or starting framework for other static portfolio projects.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">4. Zero Warranty (Educational Sandbox)</h2>
          <p>
            THE SERVICE AND CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED. WE DO NOT GUARANTEE PERFECT UP-TIME, SITE PERFORMANCE INDEXES, OR CRAWLER COMPLIANCE OUT-OF-THE-BOX PRIOR TO COMPLETING THE ASSIGNED SEO ROADMAP ASSIGNMENTS.
          </p>

          <p className="pt-6 text-xs text-slate-400">
            If you have questions about these Terms, please contact support at <span className="font-semibold text-slate-500">support@stackmug.dev</span>.
          </p>
        </div>

      </div>
    </div>
  );
}
