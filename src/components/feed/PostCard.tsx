// src/components/feed/PostCard.tsx
import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface PostCardProps {
  content: string;
  onInteraction: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ content, onInteraction }) => {
  const handleClick = () => {
    onInteraction();
  };

  return (
    <article className="bg-black/5 rounded-3xl p-2 mb-6">
      {/* White content area */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-2">
        <header className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Jane Doe</p>
            <p className="text-xs font-normal text-gray-400">5 mins ago</p>
          </div>
        </header>

        <p className="text-sm font-normal text-gray-800 leading-relaxed">{content}</p>
      </div>

      {/* Bottom section with interaction buttons inside bg-black/5 */}
      <footer className="px-2">
        <div className="flex items-center gap-6">
          <button type="button" onClick={handleClick} className="flex items-center gap-2 text-sm font-normal text-gray-600 hover:text-indigo-600 transition-colors">
            <Heart className="w-4 h-4" />
            <span>Like</span>
          </button>
          <button type="button" onClick={handleClick} className="flex items-center gap-2 text-sm font-normal text-gray-600 hover:text-indigo-600 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>Comment</span>
          </button>
          <button type="button" onClick={handleClick} className="flex items-center gap-2 text-sm font-normal text-gray-600 hover:text-indigo-600 transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </footer>
    </article>
  );
};

export default PostCard;
