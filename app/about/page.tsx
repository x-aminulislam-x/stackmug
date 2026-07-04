import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Award, Compass, Code2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About StackMug | Thermal Integrity for Developers",
  description: "Learn about StackMug, our mission to optimize developer caffeine intake, and our standards of structural stoneware integrity.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl border-b border-slate-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-sans">
            About StackMug
          </h1>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            StackMug is a fictional, production-grade business founded in 2026 to address a critical, often-overlooked bug in the developer experience: cold, unoptimized coffee.
          </p>
        </div>

        {/* Story Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">How We Compiled the Perfect Mug</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every software architect understands the danger of latency. Yet, daily, millions of developers experience significant sensory latency when their morning beverages go cold midway through a complex debugging sprint.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              We realized that standard consumer coffee mugs were not built with modern compiler speeds in mind. They lacked proper insulation bounds, visual feedback warning accents, and robust handle balances.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our engineers decided to build a better cup. We ran simulated thermal decay experiments, benchmarked multiple glaze structures, and finalized a collection of stoneware designed to fit the modern computer workstation perfectly.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5 aspect-video shadow-xs">
              <Image
                src="https://picsum.photos/seed/about/800/450"
                alt="StackMug Creative Workshop"
                width={800}
                height={450}
                className="rounded-lg object-cover h-full w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-400 font-mono">
              Figure 1.0: Thermal evaluation testing facility (fictional rendering).
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center font-sans">Core Engineering Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs hover:border-slate-900 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900 mb-4">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Syntactic Relevance</h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Mug engravings that are syntactically accurate. We do not print generic clip-art code that crashes compilers.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs hover:border-slate-900 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900 mb-4">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">No Bloatware</h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Our cups don&apos;t connect to Bluetooth or require firmware updates. They remain 100% stable through complete electricity grid outages.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs hover:border-slate-900 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900 mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Strictly Glazed</h3>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                Finished with a dense, non-porous obsidian style coating to avoid tea or coffee staining from heavy daily reuse loops.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs hover:border-slate-900 transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900 mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Open Source Spirit</h3>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                Although our mugs are real stoneware, our codebase is fully transparent and available for our community to study and expand during SEO coursework.
              </p>
            </div>

          </div>
        </div>

        {/* Course Lesson Sandbox Room */}
        <div className="mt-16 rounded-xl bg-white border border-slate-200 p-8 shadow-xs">
          <h3 className="text-xs font-bold text-slate-900 font-mono flex items-center gap-2 uppercase tracking-wider">
            🚀 SEO Roadmap Sandbox Note
            <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-800 px-2.5 py-0.5 rounded-lg font-sans font-semibold normal-case">Module 2 Active</span>
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed mt-2 max-w-4xl">
            This About Page provides a solid foundation for on-page SEO analysis. In later lessons, you will write a schema parser here to verify E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) criteria using schema.org/AboutPage tags.
          </p>
        </div>

      </div>
    </div>
  );
}
