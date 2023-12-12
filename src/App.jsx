import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader';
import { CategoriesPage } from './pages/CategoriesPage';

export function App() {
  return (
    <main dir="rtl">

      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriesPage />} />
      </Routes>
    </main>
  );
}


