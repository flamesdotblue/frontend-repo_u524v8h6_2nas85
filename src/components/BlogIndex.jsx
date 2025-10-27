import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import { Search } from 'lucide-react';

const BlogIndex = () => {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('All');

  const tags = useMemo(() => ['All', ...Array.from(new Set(blogPosts.map(p => p.tag)))], []);

  const filtered = useMemo(() => {
    return blogPosts.filter(p => {
      const matchTag = tag === 'All' || p.tag === tag;
      const q = query.toLowerCase();
      const matchQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchTag && matchQuery;
    });
  }, [query, tag]);

  return (
    <section className="relative w-full bg-black py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.05),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">Blog</h1>
            <p className="mt-2 max-w-2xl text-zinc-400">Insights from engineering, autonomy, and training at DefendAir.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts"
                className="w-56 rounded-md border border-zinc-800 bg-zinc-900/60 py-2 pl-9 pr-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-600"
              />
            </div>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-white focus:border-zinc-600"
            >
              {tags.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:shadow-lg hover:shadow-black/30">
              <div className="mb-2 text-xs text-yellow-400">{p.tag}</div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{p.excerpt}</p>
              <span className="mt-4 inline-block text-xs text-yellow-400">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
