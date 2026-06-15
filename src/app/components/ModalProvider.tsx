'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import HeroModal from './HeroModal';
import ScheduleModal from './ScheduleModal';

interface ModalContextType {
  openModal: () => void;
  openScheduleModal: () => void;
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {}, openScheduleModal: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setModalOpen(true), openScheduleModal: () => setScheduleOpen(true) }}>
      {children}
      <HeroModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
    </ModalContext.Provider>
  );
}
