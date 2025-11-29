// src/components/feed/PostCard.tsx
import React from "react";

interface PostCardProps {
  content: string;
  onInteraction: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ content, onInteraction }) => {
  const handleClick = () => {
    onInteraction();
  };

  return (
    <article className="bg-gray-200 rounded-2xl p-4 sm:p-6 mb-6">
      {/* White content area */}
      <div className="bg-white rounded-xl p-5 mb-6">
        <header className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Jane Doe</p>
            <p className="text-xs text-gray-400">5 mins ago</p>
          </div>
        </header>

        <p className="text-sm text-gray-800 leading-relaxed">{content}</p>
      </div>

      {/* Bottom section with interaction buttons inside bg-gray-200 */}
      <footer className="px-1">
        <div className="flex items-center gap-6">
          <button type="button" onClick={handleClick} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <span>❤️</span>
            <span className="text-sm">Like</span>
          </button>
          <button type="button" onClick={handleClick} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <span>💬</span>
            <span className="text-sm">Comment</span>
          </button>
          <button type="button" onClick={handleClick} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <span>🔗</span>
            <span className="text-sm">Share</span>
          </button>
        </div>
      </footer>
    </article>
  );
};

export default PostCard;
