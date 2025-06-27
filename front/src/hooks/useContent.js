// src/hooks/useContent.js
import { useState, useEffect } from 'react';
import contentData from '../data/content.json';

const useContent = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        // В реальном приложении здесь может быть запрос к API
        // Для данного примера мы просто загружаем локальный JSON
        setContent(contentData);
    }, []);

    return content;
};

export default useContent;