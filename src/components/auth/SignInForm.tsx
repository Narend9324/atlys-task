// src/components/auth/SignInForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

interface Props {
  switchToSignUp?: () => void;
  onSuccess?: () => void;
}

const SignInForm: React.FC<Props> = ({ switchToSignUp, onSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    if (onSuccess) {
      onSuccess();
    }
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col items-center gap-3 mb-2">
        <div className="h-11 w-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
          <LogIn className="w-5 h-5 text-gray-600" />
        </div>
        <h2 className="text-xl font-semibold text-center">Sign in to continue</h2>
      </div>
      <p className="text-center text-gray-500 text-sm font-normal mb-4">
        Sign in to access all the features on this app
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

      <Button type="submit">Sign In</Button>

      {switchToSignUp && (
        <p className="text-center text-sm font-normal text-gray-500 mt-3">
          Do not have an account?{" "}
          <button type="button" onClick={switchToSignUp} className="text-indigo-600 font-medium">
            Sign Up
          </button>
        </p>
      )}
    </form>
  );
};

export default SignInForm;
