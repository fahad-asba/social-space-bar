'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import HeroModal from './HeroModal';

interface ModalContextType {
  openModal: () => void;
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setModalOpen(true) }}>
      {children}
      <HeroModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </ModalContext.Provider>
  );
}
