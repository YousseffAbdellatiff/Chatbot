'use client';

import React, { useEffect, useRef } from 'react';

// Props for message list
interface ChatWindowProps {
  messages: string[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Automatically scroll to the bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-[500px] overflow-y-auto p-4 border rounded-lg bg-white dark:bg-gray-800 flex flex-col space-y-2">
        {messages.map((message, index) => {
          const [sender, content] = message.split(':', 2);
          const isBot = sender === 'bot';

          return (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-xs break-words whitespace-pre-wrap ${
                isBot
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-200 text-black self-start'
              }`}
            >
              {content}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default ChatWindow;