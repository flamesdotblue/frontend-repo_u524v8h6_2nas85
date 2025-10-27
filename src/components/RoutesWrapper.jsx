import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductsServices from './ProductsServices';
import About from './About';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';
import BestPerformers from './BestPerformers';

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsServices />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/performers" element={<BestPerformers />} />
    </Routes>
  );
};

export default RoutesWrapper;
