// src/pages/BlogPage.jsx
import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import useContent from '../hooks/useContent';

const BlogPage = () => {
    const content = useContent();

    if (!content) {
        return <Container className="text-center my-5">Загрузка...</Container>;
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4 text-primary">Наш блог</h1>
            <Row className="g-4">
                {content.blog.map((post, index) => (
                    <Col md={6} key={index}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="text-primary">{post.title}</Card.Title> {/* Статьи и советы  */}
                                <Card.Text>{post.content}</Card.Text>
                                {/* Здесь можно добавить возможность комментирования и подписки на обновления  */}
                                <Button variant="outline-primary" size="sm">Читать далее</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogPage;