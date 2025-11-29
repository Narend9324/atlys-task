import React, { useState } from "react";
import Modal from "../ui/Modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const handleAuthSuccess = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {mode === "signin" ? (
        <SignInForm switchToSignUp={() => setMode("signup")} onSuccess={handleAuthSuccess} />
      ) : (
        <SignUpForm switchToSignIn={() => setMode("signin")} onSuccess={handleAuthSuccess} />
      )}
    </Modal>
  );
};

export default AuthModal;
