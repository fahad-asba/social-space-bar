'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { openCalendlySchedule } from '@/lib/calendly';
import { openTawkChat } from '@/lib/tawk';

const HeroModal = dynamic(() => import('./HeroModal'));
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

  return (
    <ModalContext.Provider value={{ openModal: () => setModalOpen(true), openScheduleModal: openCalendlySchedule, openLiveChat: openTawkChat }}>
      {children}
      <HeroModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </ModalContext.Provider>
  );
}