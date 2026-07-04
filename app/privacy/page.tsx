import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | StackMug Sandbox",
  description: "Read the StackMug privacy policy. Understand how we manage cookie configurations, mock logs, and site analytics.",
};

export default function PrivacyPage() {
  const lastUpdated = "July 3, 2026";

  return (
    <div className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sans">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-400 font-mono">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Block */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 space-y-6 leading-relaxed">
          <p>
            Welcome to <strong>StackMug</strong> (fictional company). This application is a <strong>learning sandbox environment</strong> built specifically for SEO training, performance auditing, and dynamic metadata exploration. 
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">1. Personal Information Allocation</h2>
          <p>
            Because StackMug is an educational container, we do not require user creation, registrations, or login profiles. We do not store or process payment card details, and there are no active database instances configured to retain personal identifiable information (PII).
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">2. Analytical Tracking & Cache Pools</h2>
          <p>
            By default, this sandbox contains no commercial analytics trackers (e.g., Google Analytics, Mixpanel, or Facebook Pixels). Any tracking added during subsequent modules (e.g., performance monitoring script payloads) should conform to local privacy regulations (GDPR / CCPA).
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">3. Web Storage API Utilization</h2>
          <p>
            We may use the browser&apos;s native <code className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-xs font-mono text-slate-800">localStorage</code> or cookie buffers to store visual preferences (such as sidebar toggle status). No marketing tags are written to your local cache.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">4. External Referrals</h2>
          <p>
            Our blog articles link to external sites for technical documentation and humor. StackMug is not responsible for the privacy structures or content displayed on external third-party domains.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8">5. Policy updates</h2>
          <p>
            As this project progresses through different phases of the educational SEO roadmap, this document may be modified to demonstrate compliance audits and crawler indexing guidelines.
          </p>

          <p className="pt-6 text-xs text-slate-400">
            For further clarification on privacy regulations, please contact support at <span className="font-semibold text-slate-500">support@stackmug.dev</span>.
          </p>
        </div>

      </div>
    </div>
  );
}
