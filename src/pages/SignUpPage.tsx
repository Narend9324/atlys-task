// src/pages/SignUpPage.tsx
import { Link } from "react-router-dom";
import SignUpForm from "../components/auth/SignUpForm";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full border border-gray-900 flex items-center justify-center">
                <span className="text-xs font-semibold">o</span>
              </div>
              <span className="text-sm font-semibold tracking-tight">foo-rum</span>
            </Link>
            <Link
              to="/"
              className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </Container>
      </header>

      <main className="flex items-center justify-center py-10 px-4">
        <Card>
          <SignUpForm />
        </Card>
      </main>
    </div>
  );
};

export default SignUpPage;
