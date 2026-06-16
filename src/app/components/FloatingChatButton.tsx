'use client';
import { MessageCircle } from 'lucide-react';
import { useModal } from './ModalProvider';

export default function FloatingChatButton() {
  const { openLiveChat } = useModal();
  return (
    <>
      <button type="button" className="floating-chat-btn" onClick={openLiveChat} aria-label="Live Chat">
        <MessageCircle size={24} />
      </button>
      <style>{`
        .floating-chat-btn {
          position: fixed; bottom: 20px; right: 20px; z-index: 9999;
          width: 56px; height: 56px; border-radius: 50%;
          background: #66C7C0; border: none; color: #0d1526;
          display: none; align-items: center; justify-content: center;
          cursor: pointer; box-shadow: 0 4px 20px rgba(102,199,192,0.4);
          transition: all 0.3s ease;
        }
        .floating-chat-btn:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(102,199,192,0.5); }
        .floating-chat-btn:active { transform: scale(0.95); }
        @media (max-width: 768px) {
          .floating-chat-btn { display: flex; }
        }
      `}</style>
    </>
  );
}
