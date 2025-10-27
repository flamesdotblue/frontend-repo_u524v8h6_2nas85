import React from 'react';
import { Package, BookOpen, Wrench } from 'lucide-react';

const SectionCard = ({ title, children, icon: Icon }) => (
  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg shadow-black/30">
    <div className="mb-4 flex items-center gap-2 text-yellow-400">
      <Icon size={20} />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="mr-2 mb-2 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
    {children}
  </span>
);

const ProductsServices = () => {
  return (
    <section id="products" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.06),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Products, Courses & Services</h2>
          <p className="mt-2 max-w-3xl text-zinc-400">
            Explore our curated hardware lineup, learn with industry-grade training, and leverage bespoke services for your mission.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SectionCard title="Products" icon={Package}>
            <ul className="list-inside space-y-2 text-zinc-200">
              <li className="flex items-center justify-between rounded-lg bg-zinc-800/40 px-3 py-2">
                <span>DIY Drone</span>
                <Badge>Kit</Badge>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-zinc-800/40 px-3 py-2">
                <span>Frames</span>
                <Badge>Carbon</Badge>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-zinc-800/40 px-3 py-2">
                <span>Propellers</span>
                <Badge>Balanced</Badge>
              </li>
              <li className="flex items-center justify-between rounded-lg bg-zinc-800/40 px-3 py-2">
                <span>Motors</span>
                <Badge>High-Torque</Badge>
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Courses" icon={BookOpen}>
            <ul className="list-disc list-inside space-y-2 text-zinc-200">
              <li>Drone Building</li>
              <li>Drone Programming</li>
              <li>Robotics</li>
            </ul>
          </SectionCard>

          <SectionCard title="Services" icon={Wrench}>
            <ul className="list-disc list-inside space-y-2 text-zinc-200">
              <li>Customisable drone building</li>
              <li>Drone repair</li>
            </ul>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
