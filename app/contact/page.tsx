import React from "react";
import { Metadata } from "next";
import { Mail, MapPin, Phone, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact StackMug Support | Hardware Query",
  description: "Reach out to the StackMug team for wholesale inquiries, custom team mugs, or heat retention specifications.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-sans">
            Contact Support
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
            Have a question about glaze safety, wholesale packaging, or custom compiler-themed designs? Submit a socket query below or reach out via official communications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Col: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Communication Ports</h2>
              <p className="mt-2 text-xs text-slate-500">
                Our support team operates on Standard Business Hours (Monday through Friday, 09:00 - 17:00 UTC).
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-950 bg-white shadow-xs">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Email Address</h3>
                  <p className="text-sm text-slate-600 mt-1">support@stackmug.dev</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-950 bg-white shadow-xs">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Callback Channel</h3>
                  <p className="text-sm text-slate-600 mt-1">+1 (800) 555-MUGS</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-950 bg-white shadow-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Physical Origin Node</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    128 Compiler Lane, Suite 404<br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>

            {/* Structured Sandbox Hints */}
            <div className="border border-slate-200 bg-white rounded-xl p-4 shadow-xs">
              <p className="text-xs font-semibold text-slate-900">On-Page SEO Exercise</p>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                Local SEO represents a vital pillar of organic visibility. During upcoming course exercises, we will leverage schema.org/LocalBusiness schemas on this contact file to secure map snippets and call shortcut buttons on mobile search platforms.
              </p>
            </div>
          </div>

          {/* Right Col: Simple Sandbox Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="h-5 w-5 text-slate-400" />
              <h2 className="text-base font-bold text-slate-900">Query Dispatch Panel</h2>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                    Developer Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    disabled
                    placeholder="E.g., Ada Lovelace"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                    E-mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    disabled
                    placeholder="ada@analytical-engine.org"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                  Query Topic
                </label>
                <select
                  id="subject"
                  disabled
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400 outline-none cursor-not-allowed"
                >
                  <option value="wholesale">Wholesale custom team mugs</option>
                  <option value="specs">Glaze chemistry and temperature stats</option>
                  <option value="shipping">Delivery tracking support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                  Body Context
                </label>
                <textarea
                  id="message"
                  rows={4}
                  disabled
                  placeholder="Form is disabled for sandbox training..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none cursor-not-allowed resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                disabled
                className="w-full rounded-lg bg-slate-300 py-3.5 text-center text-sm font-semibold text-white cursor-not-allowed"
              >
                Submit Query (Sandbox Mode)
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
