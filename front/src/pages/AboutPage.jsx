// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useContent from '../hooks/useContent';

const AboutPage = () => {
    const content = useContent();

    if (!content) {
        return <Container className="text-center my-5">Загрузка...</Container>;
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4 text-primary">О нас</h1>
            <Row className="mb-5">
                <Col>
                    <p className="lead text-center">{content.company}</p>
                </Col>
            </Row>

            {/* Информация о команде [cite: 4] */}
            <h2 className="text-center mb-4 text-secondary">Наша команда профессионалов</h2>
            <Row className="g-4 mb-5 justify-content-center">
                {content.team.images.map((image, index) => (
                    <Col md={4} key={index}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Img
                                variant="top"
                                src={`/images/${image}`} // Убедитесь, что изображения находятся в папке public/images
                                alt={`Команда ${index + 1}`}
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title className="text-center text-primary">Специалист #{index + 1}</Card.Title>
                                <Card.Text className="text-muted text-center">
                                    {/* Здесь можно добавить описание роли, если оно есть в данных */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="mb-5">
                <Col>
                    <p className="text-center">{content.team.description}</p>
                </Col>
            </Row>


            {/* Отзывы клиентов [cite: 4] */}
            <h2 className="text-center mb-4 text-secondary">Отзывы наших клиентов</h2>
            <Row className="g-4">
                {content.reviews.map((review, index) => (
                    <Col md={6} key={index}>
                        <Card className="h-100 shadow-sm border-0 bg-light">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p className="mb-0">"{review.text}"</p>
                                    <footer className="blockquote-footer mt-2">
                                        {review.name}
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutPage;