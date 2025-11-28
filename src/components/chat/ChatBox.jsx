import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Send, MessageSquare } from 'lucide-react';

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
        <div className="flex flex-col h-full bg-white font-sans">
            <div className="p-4 border-b border-gray-100 flex items-center gap-2 bg-gray-50">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <MessageSquare size={16} />
                </div>
                <h3 className="font-bold text-gray-800">AI Assistant</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                {messages.length === 0 && (
                    <div className="text-center text-gray-400 text-sm mt-10">
                        Ask me anything...
                    </div>
                )}
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.from === 'me'
                                ? 'bg-blue-600 text-white rounded-br-none'
                                : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Type your message…"
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-800 placeholder-gray-400"
                    />
                    <button
                        onClick={sendMessage}
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                        <Send size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
