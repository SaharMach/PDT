import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';
import { LoginSignup } from './pages/LoginPage';
import { ItemDetails } from './pages/ItemDetails';
import { CartIndex } from './cmps/CartIndex';
export function App() {
  return (
    <main dir="rtl">

      <AppHeader />
      <Routes>
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/signup' element={<LoginSignup />} />
        <Route path='/products/:itemId' element={<ItemDetails />} />
        <Route path='/cart' element={<CartIndex />} />
      </Routes>
    </main>
  );
}


