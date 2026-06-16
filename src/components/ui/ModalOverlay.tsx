'use client';
import { useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  className?: string;
  hideClose?: boolean;
}

export default function ModalOverlay({ isOpen, onClose, children, maxWidth = '780px', className, hideClose }: ModalOverlayProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <div className="mo-overlay" onClick={handleOverlayClick}>
        <div className={`mo-content${className ? ` ${className}` : ''}`} style={{ maxWidth }}>
          {!hideClose && <button type="button" onClick={onClose} className="mo-close-btn" aria-label="Close modal">×</button>}
          {children}
        </div>
      </div>
      <style>{`
        .mo-overlay {
          position: fixed; inset: 0; z-index: 99999;
          background: rgba(0,0,0,0.65); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: fadeIn 0.25s ease;
        }
        .mo-content {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 24px; width: 100%;
          overflow: hidden; position: relative;
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
          animation: modalSlideUp 0.35s ease;
          max-height: 85vh;
        }
        .mo-close-btn {
          position: absolute; top: 14px; right: 14px; z-index: 10;
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--card-bg); border: 1px solid var(--border);
          color: var(--foreground); font-size: 1.4rem; line-height: 1;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.3s;
        }
        .mo-close-btn:hover { background: #66C7C0; color: #fff; border-color: #66C7C0; }
        @media (max-width: 600px) {
          .mo-overlay { padding: 12px; }
          .mo-content { border-radius: 18px; max-height: 90vh; }
        }
        @media (max-width: 480px) {
          .mo-overlay { padding: 8px; align-items: flex-end; }
          .mo-content { border-radius: 16px 16px 0 0; max-height: 92vh; }
          .mo-close-btn { top: 10px; right: 10px; width: 32px; height: 32px; font-size: 1.2rem; }
        }
      `}</style>
    </>
  );
}
