// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import useContent from '../hooks/useContent';

const Header = () => {
    const content = useContent();

    if (!content) {
        return null; // Или загрузочный спиннер
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">{content.company.split(',')[0]}</Navbar.Brand> {/* Логотип компании  */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/about">О нас</Nav.Link>
                        <Nav.Link href="/services">Услуги</Nav.Link>
                        <Nav.Link href="/gallery">Галерея</Nav.Link>
                        <Nav.Link href="/blog">Блог</Nav.Link>
                        <Nav.Link href="/contacts">Контакты</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;