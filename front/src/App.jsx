// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CalculatorPage from './pages/CalculatorPage'; // Добавьте импорт калькулятора
import './App.css'; // Для кастомных стилей

function App() {
    return (
        <Router>
            <Header />
            <main style={{ minHeight: '80vh' }}> {/* Для push-футера вниз */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contacts" element={<ContactPage />} />
                    <Route path="/calculator" element={<CalculatorPage />} /> {/* Маршрут для калькулятора */}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;