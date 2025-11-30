import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
      <div className="relative w-full max-w-md rounded-3xl bg-gray-200 p-2">
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
