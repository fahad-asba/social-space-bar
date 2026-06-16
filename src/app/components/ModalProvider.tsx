'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const HeroModal = dynamic(() => import('./HeroModal'));
const ScheduleModal = dynamic(() => import('./ScheduleModal'));
const LiveChatModal = dynamic(() => import('./LiveChatModal'));

interface ModalContextType {
  openModal: () => void;
  openScheduleModal: () => void;
  openLiveChat: () => void;
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {}, openScheduleModal: () => {}, openLiveChat: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setModalOpen(true), openScheduleModal: () => setScheduleOpen(true), openLiveChat: () => setChatOpen(true) }}>
      {children}
      <HeroModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
      <LiveChatModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </ModalContext.Provider>
  );
}
