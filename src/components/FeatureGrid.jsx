import { Users, Calendar, CreditCard, Heart, Settings, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Member Management',
    desc: 'Single source of truth for profiles, roles, renewals, and communications.',
    color: 'from-indigo-500/20 to-indigo-500/5',
  },
  {
    icon: Calendar,
    title: 'Events & RSVPs',
    desc: 'Create events, sell tickets, track attendance, and automate reminders.',
    color: 'from-fuchsia-500/20 to-fuchsia-500/5',
  },
  {
    icon: CreditCard,
    title: 'Fees & Dues',
    desc: 'Set monthly fees, automate billing, and reconcile payments with ease.',
    color: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: Heart,
    title: 'Donations',
    desc: 'Accept one-time and recurring donations with transparent reporting.',
    color: 'from-rose-500/20 to-rose-500/5',
  },
  {
    icon: Settings,
    title: 'Workflows',
    desc: 'Automate onboarding, renewals, and reminders with powerful workflows.',
    color: 'from-amber-500/20 to-amber-500/5',
  },
  {
    icon: Shield,
    title: 'Security & Roles',
    desc: 'Granular roles and permissions with audit trails and SSO-ready.',
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Everything your association needs</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Spend less time in spreadsheets and more time building community.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className={`group relative rounded-2xl border border-white/20 bg-gradient-to-br ${color} p-6 hover:shadow-xl transition`}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur">
                  <Icon className="text-gray-900 dark:text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              <div className="mt-5 flex items-center gap-2 text-indigo-600 font-medium">
                <span>Learn more</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
