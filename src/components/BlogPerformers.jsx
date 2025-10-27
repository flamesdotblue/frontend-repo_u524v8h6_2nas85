import React from 'react';
import { Crown, Trophy } from 'lucide-react';

const BlogCard = ({ title, excerpt, tag }) => (
  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:shadow-lg hover:shadow-black/30">
    <div className="mb-2 text-xs text-yellow-400">{tag}</div>
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <p className="mt-1 text-sm text-zinc-300">{excerpt}</p>
    <button className="mt-4 rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-200 hover:border-zinc-500">
      Read more
    </button>
  </div>
);

const Performer = ({ name, achievement }) => (
  <div className="flex items-center justify-between rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
    <div>
      <div className="text-sm font-semibold text-white">{name}</div>
      <div className="text-xs text-zinc-400">{achievement}</div>
    </div>
    <Trophy className="text-yellow-400" size={18} />
  </div>
);

const BlogPerformers = () => {
  const posts = [
    {
      title: 'Designing Modular Frames for Harsh Environments',
      excerpt: 'A deep dive into materials, vibrations, and field serviceability for next-gen drones.',
      tag: 'Engineering',
    },
    {
      title: 'Autonomous Navigation with Vision + IMU Fusion',
      excerpt: 'We explore robust SLAM pipelines for GPS-denied scenarios and low-light performance.',
      tag: 'AI + Control',
    },
    {
      title: 'Training Pilots for Real-World Missions',
      excerpt: 'From simulators to live drills: building confidence and safety-first reflexes.',
      tag: 'Training',
    },
  ];

  const performers = [
    { name: 'Riya Sharma', achievement: 'Flight control optimization' },
    { name: 'Ethan Park', achievement: 'Motor efficiency benchmarking' },
    { name: 'Sara Kim', achievement: 'Crash-resistant frame study' },
    { name: 'Leo Martins', achievement: 'Battery thermal profiling' },
    { name: 'Ava Patel', achievement: 'Autonomous waypoint tuning' },
  ];

  return (
    <section id="blog" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.05),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Crown size={18} />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Blog & Best Performers</h2>
            </div>
            <p className="mt-2 max-w-2xl text-zinc-400">Insights from our labs and recognition for the brilliant interns who push boundaries with us.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-xl font-semibold text-white">Top 5 Best-Performing Interns</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {performers.map((pf) => (
              <Performer key={pf.name} {...pf} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPerformers;
