import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10">
      <div className="mx-auto max-w-7xl px-6 text-sm text-zinc-400">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="font-semibold text-white">DefendAir Technologies</div>
            <div className="text-xs text-zinc-500">Futuristic drones. Today.</div>
          </div>
          <div className="flex gap-4">
            <Link to="/products" className="hover:text-yellow-400">Products</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
          </div>
        </div>
        <div className="mt-6 text-xs text-zinc-600">© {new Date().getFullYear()} DefendAir Technologies. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
