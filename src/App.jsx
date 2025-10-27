import React from 'react';
import Hero from './components/Hero';
import ProductsServices from './components/ProductsServices';
import About from './components/About';
import BlogPerformers from './components/BlogPerformers';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-black tracking-tight text-yellow-400">DefendAir Technologies</a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#products" className="hover:text-yellow-400">Products</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#blog" className="hover:text-yellow-400">Blog</a>
          </nav>
          <a href="#products" className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">Get Started</a>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <ProductsServices />
      <About />
      <BlogPerformers />

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-zinc-400">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-semibold text-white">DefendAir Technologies</div>
              <div className="text-xs text-zinc-500">Futuristic drones. Today.</div>
            </div>
            <div className="flex gap-4">
              <a href="#products" className="hover:text-yellow-400">Products</a>
              <a href="#about" className="hover:text-yellow-400">About</a>
              <a href="#blog" className="hover:text-yellow-400">Blog</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-zinc-600">© {new Date().getFullYear()} DefendAir Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
