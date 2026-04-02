import React from 'react';

export default function Dashboard() {
  const cards = [
    { label: 'Network Traffic', val: '42.5 GB', color: 'primary' },
    { label: 'System Uptime', val: '99.98%', color: 'accent' },
    { label: 'Active Nodes', val: '1,024', color: 'primary' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-bgPaper p-8 rounded-3xl border border-gray-700/10 shadow-xl hover:border-primary/50 transition-all group">
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{c.label}</p>
            <h2 className="text-4xl font-black text-primary group-hover:scale-105 transition-transform">{c.val}</h2>
          </div>
        ))}
      </div>

      <div className="bg-bgPaper rounded-3xl border border-gray-700/10 overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 text-primary text-xs uppercase tracking-tighter">
              <th className="p-5">User ID</th>
              <th className="p-5">Privilege</th>
              <th className="p-5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/10">
            {[1, 2, 3].map((_, i) => (
              <tr key={i} className="hover:bg-primary/5 transition-colors">
                <td className="p-5 font-mono text-sm">#000{i + 452}</td>
                <td className="p-5 text-sm font-semibold">Level_{i + 1}</td>
                <td className="p-5"><span className="animate-pulse inline-block w-2 h-2 rounded-full bg-primary mr-2" /> Encrypted</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}