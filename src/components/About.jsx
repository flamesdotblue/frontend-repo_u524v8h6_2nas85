import React from 'react';
import { Users, Calendar } from 'lucide-react';

const TimelineItem = ({ year, title, desc, img }) => (
  <div className="relative flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
    <img src={img} alt={title} className="h-20 w-28 rounded-md object-cover" />
    <div>
      <div className="text-sm text-yellow-400">{year}</div>
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="text-sm text-zinc-300">{desc}</p>
    </div>
  </div>
);

const Person = ({ name, role }) => (
  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 text-center">
    <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-gradient-to-br from-yellow-500/40 to-yellow-700/30" />
    <div className="text-sm font-semibold text-white">{name}</div>
    <div className="text-xs text-zinc-400">{role}</div>
  </div>
);

const About = () => {
  const timeline = [
    {
      year: '2021',
      title: 'Founded',
      desc: 'DefendAir sets out to build reliable, modular drones for defense and industry.',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop',
    },
    {
      year: '2022',
      title: 'First Fleet Deployed',
      desc: 'We deployed our first autonomous fleet for site inspection and mapping.',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    },
    {
      year: '2024',
      title: 'Training Division',
      desc: 'Launched courses empowering creators to build and program aerial systems.',
      img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const leaders = [
    { name: 'Ariana Voss', role: 'CEO' },
    { name: 'Noah Kade', role: 'CTO' },
    { name: 'Maya Lin', role: 'COO' },
  ];

  const founders = Array.from({ length: 10 }).map((_, i) => ({
    name: `Founder ${i + 1}`,
    role: 'Founding Team',
  }));

  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(234,179,8,0.06),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-2 text-yellow-400">
          <Calendar size={18} />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Journey so far</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {timeline.map((t) => (
            <TimelineItem key={t.title} {...t} />
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 items-end gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="mb-2 flex items-center gap-2 text-yellow-400">
              <Users size={18} />
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-zinc-300">
              We envision an aerial future where intelligent drones enhance safety, sustainability, and human capability. Our focus is reliability, modularity, and ethical autonomy.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-3 text-xl font-semibold text-white">Leading Team</h3>
            <div className="grid grid-cols-3 gap-3">
              {leaders.map((p) => (
                <Person key={p.name} {...p} />
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-3 text-xl font-semibold text-white">Founding Team</h3>
            <div className="grid grid-cols-5 gap-3">
              {founders.map((p, idx) => (
                <Person key={idx} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
