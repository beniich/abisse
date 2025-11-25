// backend/chat-server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*', methods: ['GET', 'POST'] },
});

// OpenAI configuration (expects OPENAI_API_KEY in .env)
const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

io.on('connection', (socket) => {
    console.log('🟢 Client connected', socket.id);

    socket.on('chatMessage', async (msg) => {
        try {
            // Forward user message to OpenAI (ChatGPT) and emit response
            const completion = await openai.createChatCompletion({
                model: 'gpt-4o-mini',
                messages: [{ role: 'user', content: msg.content }],
                temperature: 0.7,
            });
            const reply = completion.data.choices[0].message.content;
            socket.emit('chatMessage', { content: reply, timestamp: new Date().toISOString(), from: 'ai' });
        } catch (err) {
            console.error('OpenAI error', err);
            socket.emit('chatMessage', { content: '⚠️ Erreur du serveur IA', timestamp: new Date().toISOString(), from: 'system' });
        }
    });

    socket.on('disconnect', () => {
        console.log('🔴 Client disconnected', socket.id);
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`🚀 Chat server listening on http://localhost:${PORT}`);
});
