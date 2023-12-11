import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader';
export function App() {
  return (
    <main dir="rtl">

      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}


