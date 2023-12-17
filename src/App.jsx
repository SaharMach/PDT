import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';
import { LoginSignup } from './pages/LoginPage';
export function App() {
  return (
    <main dir="rtl">

      <AppHeader />
      <Routes>
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/signup' element={<LoginSignup />} />
      </Routes>
    </main>
  );
}


