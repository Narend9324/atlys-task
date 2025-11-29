// src/components/auth/SignUpForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

interface Props {
  switchToSignIn?: () => void;
  onSuccess?: () => void;
}

const SignUpForm: React.FC<Props> = ({ switchToSignIn, onSuccess }) => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Passwords do not match");
    signup(email, password);
    if (onSuccess) {
      onSuccess();
    }
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col items-center gap-3 mb-2">
        <div className="h-11 w-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
          <span className="text-lg">🔓</span>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-center">Create an account to continue</h2>
      </div>
      <p className="text-center text-gray-500 text-xs sm:text-sm mb-4">
        Create an account to access all the features on this app
      </p>

      <Input
        label="Email or username"
        placeholder="Enter your email or username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        type="password"
        label="Repeat password"
        placeholder="Enter your password again"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit">Sign Up</Button>

      {switchToSignIn && (
        <p className="text-center text-sm text-gray-500 mt-3">
          Already have an account?{" "}
          <button type="button" onClick={switchToSignIn} className="text-indigo-600 font-medium">
            Sign In
          </button>
        </p>
      )}
    </form>
  );
};

export default SignUpForm;
