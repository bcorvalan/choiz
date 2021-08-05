import React, { useContext, useState, createContext } from "react";
const ModalContext = createContext();
const ModalUpdateContext = createContext();

//Costume Modal hook
export function useModal() {
  return useContext(ModalContext);
}
export function useModalUpdate() {
  return useContext(ModalUpdateContext);
}

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((prevShowModal) => !prevShowModal);
  }

  return (
    <ModalContext.Provider value={showModal}>
      <ModalUpdateContext.Provider value={toggleModal}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  );
}
