import React from 'react';
import Navbar from '../components/Navbar';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';

const ChatPage: React.FC = () => {
  console.log("✅ ChatPage loaded");

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 flex flex-col justify-between max-w-2xl mx-auto w-full px-4 py-6">
        <h1 className="text-xl mb-4">Hello from ChatPage!</h1> {/* ✅ Visible test */}
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatPage;