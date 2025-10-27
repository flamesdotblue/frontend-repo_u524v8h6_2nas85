import React from 'react';
import Header from './components/Header';
import RoutesWrapper from './components/RoutesWrapper';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <RoutesWrapper />
      <Footer />
    </div>
  );
}

export default App;
