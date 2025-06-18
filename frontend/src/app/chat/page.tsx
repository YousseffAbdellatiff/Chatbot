'use client';

import React, { useState } from 'react';
import ChatWindow from '../../components/ChatWindow';
import ChatInput from '../../components/ChatInput';
import Navbar from '../../components/Navbar';

const ChatPage = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (text: string) => {
    if (text.trim() !== '') {
      setMessages((prev) => [...prev, text]);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 flex flex-col justify-between max-w-2xl mx-auto w-full px-4 py-6">
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

console.log("✅ ChatWindow component loaded");

export default ChatPage;