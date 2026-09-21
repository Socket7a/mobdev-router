import { useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { products, categories } from './data/products.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';

const App = () => {
  return (
    <Routes>  
      <Route path = "/" element= {<Layout/>} >
          <Route index element = {<HomePage/>} />
          <Route path="catalog" element={<CatalogPage/> } />
          <Route path="catalog/:id" element={<ProductPage/> } />
          <Route path="About" element={<AboutPage/>} />
          <Route path="contacts" element={<ContactsPage/>} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App