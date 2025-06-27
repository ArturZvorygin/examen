// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useContent from '../hooks/useContent';

const Footer = () => {
    const content = useContent();

    if (!content) {
        return null;
    }

    return (
        <footer className="bg-dark text-white mt-5 p-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>{content.company.split(',')[0]}</h5>
                        <p>
                            {content.slogan}
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Контакты</h5>
                        <p>
                            Адрес: {content.contacts.address} [cite: 8]
                            <br />
                            Телефон: {content.contacts.phone} [cite: 8]
                            <br />
                            Email: {content.contacts.email} [cite: 8]
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Мы в соцсетях</h5>
                        {/* Добавьте иконки соцсетей */}
                        <a href="#" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-vk"></i></a>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} {content.company.split(',')[0]}. Все права защищены.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;