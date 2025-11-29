import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
      <div className="relative w-full max-w-lg rounded-2xl bg-gray-200 p-4 sm:p-6">
        <button
          type="button"
          aria-label="Close"
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 z-10"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="bg-white rounded-xl p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
