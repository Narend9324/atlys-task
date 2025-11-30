import React, { useState } from "react";
import { Smile, Paperclip, Plus, Trash2, Send, AlignLeft, AlignCenter, AlignRight, Code, List, ListOrdered } from "lucide-react";
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

  const handleDelete = () => {
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
    <section className="bg-black/5 rounded-3xl p-2 ">
      {/* White content area */}
      <div className="bg-white rounded-2xl border border-gray-200">
        {/* Toolbar row with delete button */}
        <div className="flex items-center justify-between p-6 pb-0 mb-4">
          <div className="flex items-center gap-2 bg-black/5 rounded-lg p-1">
            <button
              type="button"
              onClick={handleToolbarClick}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white rounded-md transition-colors"
            >
              Paragraph
            </button>
            <div className="flex items-center gap-1">
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-sm font-bold text-gray-700 bg-white rounded shadow-sm transition-colors"
              >
                B
              </button>
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-sm italic text-gray-600 hover:bg-white hover:rounded transition-colors"
              >
                I
              </button>
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-sm underline text-gray-600 hover:bg-white hover:rounded transition-colors"
              >
                U
              </button>
            </div>
            <div className="flex items-center gap-1 ml-1">
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:rounded transition-colors"
                title="Align Left"
              >
                <AlignLeft className="w-4 h-4" />
              </button>
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:rounded transition-colors"
                title="Align Center"
              >
                <AlignCenter className="w-4 h-4" />
              </button>
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:rounded transition-colors"
                title="Align Right"
              >
                <AlignRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-1 ml-1">
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:rounded transition-colors"
                title="Bullet List"
              >
                <List className="w-4 h-4" />
              </button>
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:rounded transition-colors"
                title="Numbered List"
              >
                <ListOrdered className="w-4 h-4" />
              </button>
              <button 
                type="button" 
                onClick={handleToolbarClick} 
                className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:rounded transition-colors"
                title="Code Block"
              >
                <Code className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Delete button */}
          <button
            type="button"
            onClick={handleDelete}
            className="p-2 text-red-500 bg-red-50 rounded hover:bg-red-100 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

          {/* Textarea */}
        <div className="flex gap-4 px-6 py-4">
          <div className="flex-shrink-0">
            <Smile className="w-5 h-5 text-gray-600" />
          </div>
          <textarea
            className="w-full resize-none border-0 bg-transparent text-sm font-normal text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0 min-h-[100px]"
            placeholder="How are you feeling today?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Bottom toolbar */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100">
          <div className="flex items-center gap-3 text-gray-300">
            <button type="button" onClick={handleToolbarClick} className="hover:text-gray-600 transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <button type="button" onClick={handleToolbarClick} className="hover:text-gray-600 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button type="button" onClick={handleToolbarClick} className="hover:text-gray-600 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Send button */}
          <button
            type="button"
            onClick={handlePublish}
            className="p-3 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <Send className="w-5 h-5 fill-current" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostEditor;
