import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutesWrapper from './components/RoutesWrapper';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BrowserRouter>
        <Header />
        <RoutesWrapper />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
