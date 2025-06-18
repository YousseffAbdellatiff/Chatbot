import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';
import ChatInput, { ChatInputProps } from '../components/ChatInput';

const ChatPage = () => {
  // 1. Add state to hold the messages
  const [messages, setMessages] = useState<string[]>(['Welcome to the chat!']);

  // 2. Update the handleSend function to add new messages to the state
  const handleSend: ChatInputProps['onSend'] = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="text-xl mb-4">Hello from ChatPage!</h1>
        {/* 3. Pass the messages state to the ChatWindow component */}
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatPage;