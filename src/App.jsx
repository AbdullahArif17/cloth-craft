// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './router';

function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
      <BrowserRouter>
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
