// src/pages/ServicesPage.jsx
import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import useContent from '../hooks/useContent';

const ServicesPage = () => {
    const content = useContent();

    if (!content) {
        return <Container className="text-center my-5">Загрузка...</Container>;
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4 text-primary">Наши услуги</h1>
            <Row className="g-4">
                {content.services.map((service, index) => (
                    <Col md={4} key={index}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="text-primary">{service.name}</Card.Title> {/* Перечень услуг [cite: 5] */}
                                <Card.Text>
                                    {service.description} {/* Описание услуги [cite: 5] */}
                                    <br />
                                    **Пример:** *{service.example}* {/* Примеры работ [cite: 5] */}
                                </Card.Text>
                                <Card.Text className="fw-bold">
                                    **Цена:** {service.price} {/* Цены [cite: 5] */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Секция Калькулятора (пока заглушка)  */}
            <Row className="my-5 p-4 bg-info text-white rounded shadow-lg">
                <Col className="text-center">
                    <h2 className="mb-3">Рассчитайте стоимость вашего ремонта!</h2>
                    <p className="lead">
                        Используйте наш интерактивный калькулятор, чтобы получить примерную смету.
                    </p>
                    <Button variant="light" size="lg" href="/calculator">Перейти к калькулятору</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ServicesPage;