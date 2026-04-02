import React, { useState } from 'react';
import { Menu, LayoutDashboard, Table, Sun, Sunset, Terminal, X } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

export default function Layout({ children, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <FloatingIcons />
      
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-bgPaper/80 backdrop-blur-md border-b border-gray-700/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-textMain">
            {isOpen ? <X /> : <Menu />}
          </button>
          <h1 className="text-xl font-black tracking-tighter uppercase italic">
            RUDRA<span className="text-primary">DB</span>
          </h1>
        </div>

        <div className="flex bg-bgMain rounded-full p-1 border border-primary/20 shadow-inner">
          <button onClick={() => setTheme('light')} className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-primary text-white scale-110' : 'text-textMain/50'}`}><Sun size={18}/></button>
          <button onClick={() => setTheme('sunset')} className={`p-2 rounded-full transition-all ${theme === 'sunset' ? 'bg-primary text-white scale-110' : 'text-textMain/50'}`}><Sunset size={18}/></button>
          <button onClick={() => setTheme('hacker')} className={`p-2 rounded-full transition-all ${theme === 'hacker' ? 'bg-primary text-white scale-110' : 'text-textMain/50'}`}><Terminal size={18}/></button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 z-40 h-screen pt-24 bg-bgPaper border-r border-gray-700/10 w-64 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="px-4 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 text-primary">
            <LayoutDashboard size={20} /> <span className="font-bold">Dashboard</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer opacity-70">
            <Table size={20} /> <span>Analytics</span>
          </div>
        </div>
      </aside>

      <main className="p-6 lg:ml-64 pt-28 relative z-10">
        {children}
      </main>
    </div>
  );
}