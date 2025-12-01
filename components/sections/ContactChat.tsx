import React, { useState, useRef, useEffect } from 'react';
import MacWindow from '../ui/MacWindow';
import { PERSONAL_INFO } from '../../constants';
import { Video, Info, Edit, Smile, Image } from 'lucide-react';

interface Message {
  id: number;
  user: 'me' | 'bot';
  text: string;
}

const ContactChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: 'bot', text: 'Hey there! 👋 Thanks for visiting my portfolio.' },
    { id: 2, user: 'bot', text: 'Want to collaborate on a project or just say hi?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMsg: Message = {
      id: Date.now(),
      user: 'me',
      text: inputValue
    };

    setMessages(prev => [...prev, newMsg]);
    setInputValue('');

    setTimeout(() => {
      const responseMsg: Message = {
        id: Date.now() + 1,
        user: 'bot',
        text: "Thanks! I'll reply within 24 hours. ⚡"
      };
      setMessages(prev => [...prev, responseMsg]);
    }, 1500);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <MacWindow 
        title="Messages"
        className="max-w-3xl h-[600px]"
        sidebar={
           <div className="flex flex-col h-full">
              <div className="p-2 border-b border-white/10">
                 <input type="text" placeholder="Search" className="w-full bg-black/20 text-sm py-1 px-2 rounded text-white placeholder-white/30 focus:outline-none" />
              </div>
              <div className="flex-1 p-2">
                 <div className="flex gap-3 bg-blue-600/20 p-2 rounded cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                       <img src="https://ui-avatars.com/api/?name=Harsh+Bafna" className="w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="flex justify-between">
                          <span className="font-bold text-sm text-white">Harsh Bafna</span>
                          <span className="text-xs text-white/40">Now</span>
                       </div>
                       <div className="text-xs text-white/60 truncate">Want to collaborate on a...</div>
                    </div>
                 </div>
              </div>
           </div>
        }
        toolbar={
           <div className="flex items-center justify-between w-full">
              <Edit size={18} className="text-black/50" />
              <div className="flex flex-col items-center">
                 <div className="w-6 h-6 rounded-full bg-gray-500 overflow-hidden mb-0.5">
                    <img src="https://ui-avatars.com/api/?name=Harsh+Bafna" className="w-full h-full" />
                 </div>
                 <span className="text-[10px] text-black/60 font-semibold">Harsh Bafna</span>
              </div>
              <div className="flex gap-4 text-blue-500">
                 <Video size={18} fill="currentColor" />
                 <Info size={18} />
              </div>
           </div>
        }
      >
        <div className="h-full flex flex-col bg-[#1e1e1e]">
           {/* Chat Area */}
           <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <div className="text-center text-[10px] text-white/30 my-4">iMessage • Today 9:41 AM</div>
              
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.user === 'me' ? 'justify-end' : 'justify-start'}`}>
                   {msg.user === 'bot' && (
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-2 self-end mb-1 bg-gray-500">
                         <img src="https://ui-avatars.com/api/?name=Harsh+Bafna" className="w-full h-full" />
                      </div>
                   )}
                   <div className={`
                      max-w-[70%] px-3 py-1.5 text-sm rounded-2xl
                      ${msg.user === 'me' ? 'bg-blue-600 text-white' : 'bg-[#3a3a3c] text-white'}
                   `}>
                      {msg.text}
                   </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
           </div>

           {/* Input Area */}
           <div className="p-3 bg-[#1e1e1e] border-t border-white/5">
              <form onSubmit={handleSend} className="flex items-center gap-3">
                 <div className="flex gap-2 text-mac-gray">
                    <div className="bg-gray-700/50 p-1 rounded-full"><Image size={14} className="text-white/60" /></div>
                    <div className="bg-gray-700/50 p-1 rounded-full"><Smile size={14} className="text-white/60" /></div>
                 </div>
                 <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="iMessage"
                    className="flex-1 bg-black/20 border border-white/10 rounded-full py-1 px-3 text-sm text-white focus:outline-none focus:border-white/20"
                 />
                 {inputValue && (
                    <button type="submit" className="text-blue-500 font-bold text-sm">Send</button>
                 )}
              </form>
           </div>
        </div>
      </MacWindow>
    </div>
  );
};

export default ContactChat;