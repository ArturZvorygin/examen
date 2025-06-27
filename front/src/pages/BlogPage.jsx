import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import axiosApi from "../axiosApi";

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosApi.get('/posts');
                setPosts(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blog posts:", err);
                setError('Не удалось загрузить посты. Пожалуйста, попробуйте еще раз позже.');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <Container className="text-center my-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Загрузка постов...</span>
                </Spinner>
                <p className="mt-3">Загрузка постов...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="my-5">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    if (posts.length === 0) {
        return (
            <Container className="my-5">
                <p className="text-center">Посты пока отсутствуют.</p>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4 text-primary">Наш блог</h1>
            <Row className="g-4">
                {posts.map((post) => (
                    <Col md={6} key={post._id}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="text-primary">{post.title}</Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                                <Card.Text><small className="text-muted">Опубликовано: {new Date(post.createdAt).toLocaleDateString()}</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogPage;