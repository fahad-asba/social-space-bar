'use client';
import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User } from 'lucide-react';
import ModalOverlay from '@/components/ui/ModalOverlay';

interface LiveChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'agent' | 'user';
  text: string;
  time: string;
}

const quickReplies = [
  'What services do you offer?',
  'How much does it cost?',
  'Can you help with my brand?',
];

const initialMessages: Message[] = [
  {
    role: 'agent',
    text: "Hi there! 👋 Welcome to Social Space Bar. I'm Alex, your marketing specialist. How can I help you today?",
    time: 'Just now',
  },
];

export default function LiveChatModal({ isOpen, onClose }: LiveChatModalProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [showReplies, setShowReplies] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const addMessage = (text: string, role: 'agent' | 'user') => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role, text, time }]);
  };

  const agentReply = (userText: string) => {
    const replies: Record<string, string> = {
      'what services do you offer?': 'We offer comprehensive social media marketing — strategy, content creation, ad management, analytics, and brand development across all major platforms. Would you like to discuss a specific service?',
      'how much does it cost?': 'Our pricing is tailored to your needs. We have packages starting from $500/month for essential services. Want me to connect you with our pricing team for a custom quote?',
      'can you help with my brand?': 'Absolutely! We specialize in brand building across social media. From identity development to viral campaigns, we can take your brand to the next level. Would you like to schedule a free consultation?',
    };
    const lower = userText.toLowerCase().trim();
    const match = Object.keys(replies).find(k => lower.includes(k));
    const reply = match
      ? replies[match]
      : "Great question! Let me connect you with one of our experts who can give you a personalized answer. In the meantime, would you like to schedule a free consultation?";
    setTimeout(() => addMessage(reply, 'agent'), 600 + Math.random() * 400);
  };

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    addMessage(trimmed, 'user');
    setInput('');
    setShowReplies(false);
    agentReply(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  if (!isOpen) return null;

  return (
    <><ModalOverlay isOpen={isOpen} onClose={onClose} maxWidth="440px" className="chat-modal" hideClose>
      <div className="chat-header">
            <div className="chat-header-left">
              <div className="chat-avatar">
                <Bot size={20} />
              </div>
              <div>
                <div className="chat-agent-name">Alex</div>
                <div className="chat-agent-status">Online</div>
              </div>
            </div>
            <button type="button" onClick={onClose} className="chat-close-btn" aria-label="Close chat">×</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role === 'agent' ? 'chat-msg-agent' : 'chat-msg-user'}`}>
                <div className="chat-msg-avatar">
                  {msg.role === 'agent' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="chat-msg-content">
                  <p className="chat-msg-text">{msg.text}</p>
                  <span className="chat-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}
            {showReplies && (
              <div className="chat-quick-replies">
                {quickReplies.map((qr, i) => (
                  <button key={i} type="button" className="chat-quick-btn" onClick={() => handleSend(qr)}>
                    {qr}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chat-footer">
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="button" className="chat-send-btn" onClick={() => handleSend(input)} disabled={!input.trim()}>
              <Send size={18} />
            </button>
          </div>
    </ModalOverlay>

      <style>{`
        .chat-modal { display: flex; flex-direction: column; overflow: hidden; }
        .chat-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px; border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        .chat-header-left { display: flex; align-items: center; gap: 12px; }
        .chat-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #66C7C0, #06b6d4);
          display: flex; align-items: center; justify-content: center;
          color: #fff; flex-shrink: 0;
        }
        .chat-agent-name { font-weight: 700; font-size: 0.95rem; color: var(--foreground); }
        .chat-agent-status { font-size: 0.75rem; color: #22c55e; display: flex; align-items: center; gap: 4px; }
        .chat-agent-status::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block; }
        .chat-close-btn {
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--card-hover); border: 1px solid var(--border);
          color: var(--foreground-muted); font-size: 1.3rem; line-height: 1;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.3s;
        }
        .chat-close-btn:hover { background: #66C7C0; color: #fff; border-color: #66C7C0; }
        .chat-body {
          flex: 1; overflow-y: auto; padding: 20px;
          display: flex; flex-direction: column; gap: 14px;
          scrollbar-width: thin; scrollbar-color: rgba(102,199,192,0.3) transparent;
        }
        .chat-body::-webkit-scrollbar { width: 5px; }
        .chat-body::-webkit-scrollbar-track { background: transparent; }
        .chat-body::-webkit-scrollbar-thumb {
          background: rgba(102,199,192,0.3); border-radius: 10px;
          transition: background 0.2s;
        }
        .chat-body::-webkit-scrollbar-thumb:hover { background: rgba(102,199,192,0.5); }
        .chat-msg { display: flex; gap: 10px; max-width: 85%; animation: fadeIn 0.3s ease; }
        .chat-msg-agent { align-self: flex-start; }
        .chat-msg-user { align-self: flex-end; flex-direction: row-reverse; }
        .chat-msg-avatar {
          width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: var(--card-hover); border: 1px solid var(--border);
          color: var(--foreground-muted); margin-top: 4px;
        }
        .chat-msg-agent .chat-msg-avatar { background: rgba(102,199,192,0.12); border-color: rgba(102,199,192,0.2); color: #66C7C0; }
        .chat-msg-content { display: flex; flex-direction: column; gap: 2px; }
        .chat-msg-text {
          padding: 10px 14px; border-radius: 14px; font-size: 0.88rem;
          line-height: 1.5; color: var(--foreground);
        }
        .chat-msg-agent .chat-msg-text {
          background: var(--card-hover); border: 1px solid var(--border);
          border-bottom-left-radius: 4px;
        }
        .chat-msg-user .chat-msg-text {
          background: #66C7C0; color: #0d1526; font-weight: 500;
          border-bottom-right-radius: 4px;
        }
        .chat-msg-time { font-size: 0.65rem; color: var(--foreground-muted); padding: 0 4px; }
        .chat-msg-user .chat-msg-time { text-align: right; }
        .chat-quick-replies { display: flex; flex-wrap: wrap; gap: 8px; padding: 4px 0; }
        .chat-quick-btn {
          padding: 8px 14px; border-radius: 100px;
          background: var(--card-hover); border: 1px solid var(--border);
          color: var(--foreground-muted); font-size: 0.8rem; cursor: pointer;
          transition: all 0.2s; white-space: nowrap;
        }
        .chat-quick-btn:hover { border-color: rgba(102,199,192,0.3); color: #66C7C0; background: rgba(102,199,192,0.06); }
        .chat-footer {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 20px; border-top: 1px solid var(--border);
          flex-shrink: 0;
        }
        .chat-input {
          flex: 1; padding: 10px 16px; border-radius: 100px;
          background: var(--card-hover); border: 1px solid var(--border);
          color: var(--foreground); font-size: 0.9rem; outline: none;
          font-family: var(--font-body); transition: border-color 0.3s;
        }
        .chat-input:focus { border-color: #66C7C0; }
        .chat-input::placeholder { color: var(--foreground-muted); }
        .chat-send-btn {
          width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
          background: #66C7C0; border: none; color: #0d1526;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s;
        }
        .chat-send-btn:hover { background: #4fb8b0; }
        .chat-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        @media (max-width: 768px) {
          .chat-body { padding: 16px; max-height: 60vh; }
          .chat-quick-replies { gap: 6px; }
          .chat-quick-btn { padding: 6px 12px; font-size: 0.76rem; }
        }
        @media (max-width: 600px) {
          .chat-modal { max-width: 100%; max-height: 90vh; border-radius: 18px; margin: 0 8px; }
          .chat-header { padding: 14px 16px; }
          .chat-body { padding: 14px; }
          .chat-footer { padding: 12px 16px; }
          .chat-input { font-size: 0.85rem; padding: 8px 14px; }
        }
        @media (max-width: 480px) {
          .chat-modal { border-radius: 16px 16px 0 0; max-height: 92vh; margin: 0; }
          .chat-header { padding: 12px 14px; }
          .chat-close-btn { width: 28px; height: 28px; font-size: 1.1rem; }
          .chat-agent-name { font-size: 0.85rem; }
          .chat-body { padding: 12px; gap: 10px; }
          .chat-footer { padding: 10px 14px; gap: 8px; }
          .chat-send-btn { width: 36px; height: 36px; }
          .chat-msg-text { font-size: 0.84rem; padding: 8px 12px; }
        }
        @media (max-width: 380px) {
          .chat-header { padding: 10px 12px; }
          .chat-body { padding: 10px; }
          .chat-footer { padding: 8px 12px; }
          .chat-input { font-size: 0.82rem; padding: 7px 12px; }
          .chat-agent-name { font-size: 0.82rem; }
          .chat-avatar { width: 34px; height: 34px; }
          .chat-msg-text { font-size: 0.82rem; padding: 7px 10px; }
          .chat-quick-btn { padding: 5px 10px; font-size: 0.72rem; }
        }
      `}</style>
    </>
  );
}
