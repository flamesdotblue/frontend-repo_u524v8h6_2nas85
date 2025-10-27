import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-white">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-yellow-400">← Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 text-white">
      <div className="mb-2 text-xs text-yellow-400">{post.tag}</div>
      <h1 className="text-3xl font-bold sm:text-4xl">{post.title}</h1>
      <p className="mt-6 whitespace-pre-line text-zinc-300">{post.content}</p>
      <Link to="/blog" className="mt-8 inline-block text-yellow-400">← Back to blog</Link>
    </article>
  );
};

export default BlogPost;
