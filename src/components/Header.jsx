import { Rocket, Users, Calendar, HeartHandshake } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-fuchsia-500/20 to-cyan-500/20" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 w-fit rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-white text-sm">
          <HeartHandshake size={16} />
          <span>Built for associations and communities</span>
        </div>
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              All-in-one platform for managing your association
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Add members, collect monthly fees, organize events, and accept donations — everything in one beautiful, easy-to-use dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition"
              >
                <Rocket size={18} />
                Get Started Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-white/20 px-5 py-3 text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                See Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2"><Users size={16} /> Member CRM</div>
              <div className="flex items-center gap-2"><Calendar size={16} /> Events</div>
              <div className="flex items-center gap-2"><HeartHandshake size={16} /> Donations</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur p-4 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="Community meeting"
                className="rounded-xl object-cover w-full h-72"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-indigo-600/10 p-3">
                  <p className="text-2xl font-bold text-indigo-600">1.2k</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Members</p>
                </div>
                <div className="rounded-xl bg-fuchsia-600/10 p-3">
                  <p className="text-2xl font-bold text-fuchsia-600">$84k</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Donations</p>
                </div>
                <div className="rounded-xl bg-cyan-600/10 p-3">
                  <p className="text-2xl font-bold text-cyan-600">37</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Events Hosted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
