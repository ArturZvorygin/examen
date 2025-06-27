import { Link, useLocation } from 'react-router-dom';

function Header() {
    const { pathname } = useLocation();

    const linkClass = (path) =>
        `text-sm font-medium transition ${
            pathname === path ? 'text-blue-700 underline' : 'text-gray-600 hover:text-blue-500'
        }`;

    return (
        <header className="p-4 bg-white shadow flex justify-between items-center sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <img src="/assets/002-1.png" alt="Логотип" className="w-10 h-10" />
                <h1 className="text-2xl font-bold text-blue-900">Мастерская Ванных</h1>
            </div>
            <nav className="flex gap-5">
                <Link to="/" className={linkClass('/')}>Главная</Link>
                <Link to="/about" className={linkClass('/about')}>О нас</Link>
                <Link to="/services" className={linkClass('/services')}>Услуги</Link>
                <Link to="/gallery" className={linkClass('/gallery')}>Галерея</Link>
                <Link to="/blog" className={linkClass('/blog')}>Блог</Link>
                <Link to="/contact" className={linkClass('/contact')}>Контакты</Link>
            </nav>
        </header>
    );
}

export default Header;