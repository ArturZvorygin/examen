import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import useContent from '../hooks/useContent';

const HomePage = () => {
    const content = useContent();

    if (!content) {
        return <Container className="text-center my-5">Загрузка...</Container>;
    }

    return (
        <Container className="my-5">
            {/* Секция Hero */}
            <Row className="align-items-center mb-5 bg-light p-4 rounded shadow-sm">
                <Col md={8}>
                    <h1 className="display-4 text-primary">{content.slogan}</h1> {/* Слоган  */}
                    <p className="lead">{content.company.split('\n')[0]}</p> {/* Краткое описание компании  */}
                    <Button variant="primary" size="lg" href="/services">Наши услуги</Button>
                </Col>
                <Col md={4} className="d-flex justify-content-center">
                    <img
                        src="/images/kapitalnii-remont-vannoi-komnati.jpg" // Пример изображения
                        alt="Ванная комната"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                </Col>
            </Row>

            {/* Преимущества работы [cite: 4] */}
            <h2 className="text-center mb-4 text-secondary">Почему выбирают нас?</h2>
            <Row className="g-4 mb-5">
                {content.advantages.map((advantage, index) => (
                    <Col md={4} key={index}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="text-primary"><i className="bi bi-check-circle-fill me-2"></i>{advantage.split(':')[0]}</Card.Title>
                                <Card.Text>{advantage.split(':')[1]}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomePage;
