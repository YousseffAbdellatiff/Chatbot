'use client';

import { useState } from 'react';
import ChatWindow from '../../components/ChatWindow';
import ChatInput from '../../components/ChatInput';
import Navbar from '../../components/Navbar';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, `user:${text}`]);

    // Simulate bot reply after short delay
    setTimeout(() => {
      const botReply = `Bot says: ${getRandomReply()}`;
      setMessages((prev) => [...prev, `bot:${botReply}`]);
    }, 600);
  };

  const getRandomReply = () => {
    const replies = [
      "Hello! 👋",
      "How can I assist you?",
      "I'm a bot, nice to meet you!",
      "Interesting...",
      "Can you tell me more?",
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="flex-1 flex flex-col justify-between max-w-2xl mx-auto w-full px-4 py-6">
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}