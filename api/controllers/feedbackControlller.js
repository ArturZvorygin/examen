const Feedback = require('../models/Feedback');

const sendFeedback = async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Обязательные поля: имя, email и сообщение' });
    }

    const feedback = new Feedback({ name, email, phone, message });
    await feedback.save();

    res.status(201).json({ message: 'Сообщение отправлено' });
};

module.exports = { sendFeedback };
