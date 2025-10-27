import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const linkBase = 'text-sm text-zinc-300 hover:text-yellow-400 transition';
  const active = 'text-yellow-400';

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="font-black tracking-tight text-yellow-400">DefendAir Technologies</Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <NavLink to="/products" className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>About</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>Blog</NavLink>
          <NavLink to="/performers" className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>Best Performers</NavLink>
        </nav>
        <Link to="/products" className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
