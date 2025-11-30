import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, AlertCircle } from "lucide-react";
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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (login(email, password)) {
      if (onSuccess) {
        onSuccess();
      }
      navigate("/", { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden p-6 sm:p-8 space-y-4">
        <div className="flex flex-col items-center gap-3 mb-2">
          <div className="h-11 w-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
            <LogIn className="w-5 h-5 text-gray-600" />
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-900">Sign in to continue</h2>
        </div>
        <p className="text-center text-gray-500 text-sm font-normal mb-4">
          Sign in to access all the features on this app
        </p>

        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-4">
          <Input
            label="Email or username"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />

          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
        </div>

        <Button type="submit" className="w-full mt-2">Sign In</Button>
      </div>

      {switchToSignUp && (
        <div className="px-2 mt-4 text-center">
          <p className="text-sm font-normal text-gray-500">
            Do not have an account?{" "}
            <button type="button" onClick={switchToSignUp} className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              Sign Up
            </button>
          </p>
        </div>
      )}
    </form>
  );
};

export default SignInForm;
