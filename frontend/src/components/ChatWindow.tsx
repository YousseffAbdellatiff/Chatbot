import React from 'react';

// 1. Define an interface for the component's props
interface ChatWindowProps {
  messages: string[];
}

// 2. Update the component to accept the props
const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 border rounded-lg bg-white dark:bg-gray-800">
      <div className="flex flex-col space-y-2">
        {/* 3. Render the messages */}
        {messages.map((message, index) => (
          <div key={index} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 self-start">
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;