import React from 'react';
import { FileCode2, Atom, Wind, Database, Layers3, Terminal, Cpu } from 'lucide-react';

const iconTypes = [FileCode2, Atom, Wind, Database, Layers3, Terminal, Cpu];

export default function FloatingIcons() {
  const icons = Array.from({ length: 20 }).map((_, i) => {
    const Icon = iconTypes[Math.floor(Math.random() * iconTypes.length)];
    const style = {
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${Math.random() * 20 + 20}px`,
    };
    return <div key={i} className="floating-icon" style={style}><Icon size={24} /></div>;
  });

  return <>{icons}</>;
}