'use client'

import { useState } from 'react';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const ChatIA = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    const newMessages: Message[] = [...messages, { text: message, sender: 'user' }];
    setMessages(newMessages);
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: message }),
      });
      const data = await response.json();

      setMessages([
        ...newMessages,
        { text: data.answer || 'No pude encontrar una respuesta.', sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error al consultar el agente de IA:', error);
      setMessages([
        ...newMessages,
        { text: 'Hubo un error al obtener la respuesta.', sender: 'bot' },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />
        <button onClick={handleSendMessage} disabled={loading}>
          {loading ? 'Cargando...' : 'Enviar'}
        </button>
      </div>
    </div>
  );
};

export default ChatIA;