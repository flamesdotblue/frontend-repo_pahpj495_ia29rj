import { Users, Calendar, CreditCard, Heart, Plus, Search } from 'lucide-react';

function Stat({ icon: Icon, label, value, color }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-4">
      <div className="flex items-center gap-3">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
          <Icon className="text-white" size={18} />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default function DemoDashboard() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Live Demo</h3>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 text-sm font-medium">
                <Plus size={16} /> Add Member
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                <Calendar size={16} /> New Event
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat icon={Users} label="Active Members" value="1,248" color="bg-indigo-600" />
            <Stat icon={CreditCard} label="Monthly Fees (Mtd)" value="$12,430" color="bg-emerald-600" />
            <Stat icon={Heart} label="Donations (Qtr)" value="$27,910" color="bg-rose-600" />
            <Stat icon={Calendar} label="Upcoming Events" value="5" color="bg-fuchsia-600" />
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <h4 className="font-semibold text-gray-900 dark:text-white">Members</h4>
                <div className="flex items-center gap-2 text-sm">
                  <div className="relative">
                    <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input className="pl-8 pr-3 py-1.5 rounded-md bg-white/70 dark:bg-white/10 border border-white/10 text-sm outline-none" placeholder="Search" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <ul className="divide-y divide-white/10">
                  {[
                    { name: 'Ava Martinez', role: 'Treasurer', status: 'Active' },
                    { name: 'Noah Johnson', role: 'Member', status: 'Active' },
                    { name: 'Mia Chen', role: 'Secretary', status: 'Lapsed' },
                    { name: 'Ethan Patel', role: 'Member', status: 'Active' },
                  ].map((m) => (
                    <li key={m.name} className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{m.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">{m.role}</p>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${m.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300'}`}>{m.status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <h4 className="font-semibold text-gray-900 dark:text-white">Upcoming Events</h4>
                <button className="text-sm text-indigo-600 font-medium">View all</button>
              </div>
              <div className="p-4 space-y-4">
                {[
                  { title: 'Annual General Meeting', date: 'Nov 12, 2025', attendees: 142 },
                  { title: 'Fundraising Gala', date: 'Dec 5, 2025', attendees: 220 },
                  { title: 'Volunteer Day', date: 'Jan 18, 2026', attendees: 64 },
                ].map((e) => (
                  <div key={e.title} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{e.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{e.date}</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{e.attendees} RSVPs</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
