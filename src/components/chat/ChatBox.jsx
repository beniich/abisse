import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Initialise socket (replace URL with your backend endpoint)
const socket = io('http://localhost:4000');

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('chatMessage', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });
        return () => {
            socket.off('chatMessage');
        };
    }, []);

    const sendMessage = () => {
        if (!input.trim()) return;
        const payload = { content: input, timestamp: new Date().toISOString() };
        socket.emit('chatMessage', payload);
        setMessages((prev) => [...prev, { ...payload, from: 'me' }]);
        setInput('');
    };

    return (
        <div className="chat-box" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="messages" style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ marginBottom: '0.5rem' }}>
                        <strong>{msg.from === 'me' ? 'You' : 'AI'}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <div className="input" style={{ display: 'flex', padding: '0.5rem' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message…"
                    style={{ flex: 1, marginRight: '0.5rem' }}
                />
                <button onClick={sendMessage} style={{ padding: '0.5rem 1rem' }}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
