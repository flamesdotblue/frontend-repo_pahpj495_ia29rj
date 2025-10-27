import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 p-8 md:p-12 text-white">
          <div className="absolute -inset-40 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_0%,white,transparent_40%)]" />
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">Launch your association portal today</h3>
            <p className="mt-3 text-white/90 max-w-2xl">
              Start free. No credit card required. Upgrade when you’re ready for advanced workflows and custom branding.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition">
                Create Free Account <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/40 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">
                Explore Features
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">14-day Pro trial included • Cancel anytime • Data export available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
