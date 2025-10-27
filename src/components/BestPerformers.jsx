import React from 'react';
import { Trophy } from 'lucide-react';

const Performer = ({ name, achievement }) => (
  <div className="flex items-center justify-between rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
    <div>
      <div className="text-sm font-semibold text-white">{name}</div>
      <div className="text-xs text-zinc-400">{achievement}</div>
    </div>
    <Trophy className="text-yellow-400" size={18} />
  </div>
);

const BestPerformers = () => {
  const performers = [
    { name: 'Riya Sharma', achievement: 'Flight control optimization' },
    { name: 'Ethan Park', achievement: 'Motor efficiency benchmarking' },
    { name: 'Sara Kim', achievement: 'Crash-resistant frame study' },
    { name: 'Leo Martins', achievement: 'Battery thermal profiling' },
    { name: 'Ava Patel', achievement: 'Autonomous waypoint tuning' },
  ];

  return (
    <section className="relative w-full bg-black py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(234,179,8,0.06),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Best Performers</h1>
        <p className="mt-2 max-w-2xl text-zinc-400">Celebrating the top 5 interns for outstanding contributions.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {performers.map((p) => (
            <Performer key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPerformers;
