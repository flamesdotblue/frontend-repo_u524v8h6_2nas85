import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient overlay to improve text contrast while allowing interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-[90vh] max-w-7xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400 backdrop-blur-sm">
          <Rocket size={16} className="text-yellow-400" />
          Futuristic Aerial Intelligence
        </div>
        <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">
          DefendAir Technologies
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">
          Pushing the boundaries of autonomous flight with precision-engineered drones, advanced control systems, and immersive training.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#products" className="rounded-md bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400">
            Explore Products
          </a>
          <a href="#about" className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-500">
            Our Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
