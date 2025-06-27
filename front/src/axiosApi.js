import axios from 'axios';

// Создаем экземпляр Axios с базовым URL для вашего бэкенда
const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Базовый URL для всех ваших API-запросов
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;