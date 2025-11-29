// src/pages/FeedPage.tsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/Navbar";
import PostEditor from "../components/feed/PostEditor";
import FeedList from "../components/feed/FeedList";
import AuthModal from "../components/auth/AuthModal";

const FeedPage = () => {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<string[]>([]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handlePostCreation = (content: string) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setPosts([content, ...posts]);
  };

  const handleRequireAuth = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  };

  const handlePostInteraction = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    alert("Function not implemented");
  };

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <PostEditor
          onPost={handlePostCreation}
          isAuthenticated={isAuthenticated}
          onRequireAuth={handleRequireAuth}
        />
        <FeedList posts={posts} onPostInteraction={handlePostInteraction} />
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </main>
    </>
  );
};

export default FeedPage;
