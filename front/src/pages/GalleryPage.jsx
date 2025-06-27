// src/pages/GalleryPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap';
import useContent from '../hooks/useContent';

const GalleryPage = () => {
    const content = useContent();
    const [filter, setFilter] = useState('all');

    if (!content) {
        return <Container className="text-center my-5">Загрузка...</Container>;
    }

    const filteredImages = filter === 'all'
        ? content.gallery
        : content.gallery.filter(item => item.type === filter);

    // Получаем уникальные типы работ для фильтрации
    const uniqueTypes = ['all', ...new Set(content.gallery.map(item => item.type))];

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4 text-primary">Галерея выполненных работ</h1> {/* Фотогалерея [cite: 9] */}

            {/* Фильтрация по типам работ [cite: 9] */}
            <div className="text-center mb-4">
                <ButtonGroup aria-label="Фильтр галереи">
                    {uniqueTypes.map((type, index) => (
                        <Button
                            key={index}
                            variant={filter === type ? 'primary' : 'outline-primary'}
                            onClick={() => setFilter(type)}
                        >
                            {type === 'all' ? 'Все' : type.charAt(0).toUpperCase() + type.slice(1)}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>

            <Row className="g-4">
                {filteredImages.map((image, index) => (
                    <Col md={4} key={index}>
                        <div className="shadow-sm rounded overflow-hidden" style={{ height: '250px' }}>
                            <Image
                                src={`/images/${image.src}`} // Убедитесь, что изображения находятся в папке public/images
                                alt={image.type}
                                fluid
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GalleryPage;