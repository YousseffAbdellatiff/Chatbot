import React, { useState } from 'react';

interface ChatInputProps {
  onSend: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

return (
  <div className="flex gap-2 items-center">
    <input
      type="text"
      className="flex-1 p-2 border border-gray-300 rounded text-black"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type your message..."
    />
    <button
      onClick={handleSend}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Send
    </button>
  </div>
);
};

export default ChatInput;