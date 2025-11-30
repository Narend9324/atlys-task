import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
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
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden p-6 sm:p-8 space-y-4">
        <div className="flex flex-col items-center gap-3 mb-2">
          <div className="h-11 w-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-gray-600" />
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-900">Create an account to continue</h2>
        </div>
        <p className="text-center text-gray-500 text-sm font-normal mb-4">
          Create an account to access all the features on this app
        </p>

        <div className="space-y-4">
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
        </div>

        <Button type="submit" className="w-full mt-2">Sign Up</Button>
      </div>

      {switchToSignIn && (
        <div className="px-2 mt-4 text-center">
          <p className="text-sm font-normal text-gray-500">
            Already have an account?{" "}
            <button type="button" onClick={switchToSignIn} className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              Sign In
            </button>
          </p>
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
