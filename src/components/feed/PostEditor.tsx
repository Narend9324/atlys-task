// src/components/feed/PostEditor.tsx
import React, { useState } from "react";
import Button from "../ui/Button";

interface Props {
  onPost: (content: string) => void;
  isAuthenticated: boolean;
  onRequireAuth: () => void;
}

const PostEditor: React.FC<Props> = ({ onPost, isAuthenticated, onRequireAuth }) => {
  const [content, setContent] = useState("");

  const handlePublish = () => {
    if (!content.trim()) {
      alert("Write something before posting!");
      return;
    }

    if (!isAuthenticated) {
      onRequireAuth();
      return;
    }

    onPost(content.trim());
    setContent("");
  };

  const handleToolbarClick = () => {
    if (!isAuthenticated) {
      onRequireAuth();
      return;
    }
    alert("Function not implemented");
  };

  return (
    <section className="bg-gray-200 rounded-2xl p-4 sm:p-6 mb-6">
      {/* White content area */}
      <div className="bg-white rounded-xl p-4 sm:p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button
              type="button"
              onClick={handleToolbarClick}
              className="px-2 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-600"
            >
              Paragraph
            </button>
            <div className="hidden sm:flex items-center gap-1 text-gray-400">
              <button type="button" onClick={handleToolbarClick} className="px-1.5 py-0.5 rounded hover:bg-gray-100">
                B
              </button>
              <button type="button" onClick={handleToolbarClick} className="px-1.5 py-0.5 rounded hover:bg-gray-100">
                I
              </button>
              <button type="button" onClick={handleToolbarClick} className="px-1.5 py-0.5 rounded hover:bg-gray-100">
                U
              </button>
            </div>
          </div>
        </div>

        <textarea
          className="w-full resize-none border-0 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0 min-h-[80px]"
          placeholder="How are you feeling today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl text-gray-400">
            <button type="button" onClick={handleToolbarClick} className="hover:text-indigo-500 transition-colors">
              🙂
            </button>
            <button type="button" onClick={handleToolbarClick} className="hover:text-indigo-500 transition-colors">
              📎
            </button>
            <button type="button" onClick={handleToolbarClick} className="hover:text-indigo-500 transition-colors">
              🖼️
            </button>
          </div>

          <div className="w-28">
            <Button type="button" onClick={handlePublish}>
              Publish
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostEditor;
