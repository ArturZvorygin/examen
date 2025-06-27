import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import useContent from '../hooks/useContent';
import axios from 'axios';
import axiosApi from "../axiosApi";

const ContactPage = () => {
    const content = useContent();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    if (!content) {
        return <Container className="text-center my-5">Загрузка...</Container>;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axiosApi.post('/feedback', formData);
            setSuccess(response.data.message || 'Сообщение успешно отправлено!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            setError(err.response?.data?.message || 'Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4 text-primary">Контакты</h1>
            <Row className="mb-5">
                <Col md={6} className="mb-4 mb-md-0">
                    <h2 className="text-secondary">Свяжитесь с нами</h2>
                    <p>
                        **Адрес:** {content.contacts.address}
                        <br />
                        **Телефон:** {content.contacts.phone}
                        <br />
                        **Email:** {content.contacts.email}
                    </p>

                    <h3 className="text-secondary mt-4">Мы на карте</h3>
                    <div className="embed-responsive embed-responsive-16by9" style={{ height: '400px' }}>
                        <img
                            src={`/images/${content.contacts.mapImage}`}
                            alt="Карта местоположения"
                            className="img-fluid rounded shadow"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <h2 className="text-secondary">Отправьте нам сообщение</h2>
                    {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Ваше имя</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите ваше имя"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите ваш email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Введите ваш телефон"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Сообщение</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Ваше сообщение"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={loading}>
                            {loading ? 'Отправка...' : 'Отправить сообщение'}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;