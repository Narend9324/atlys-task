// src/components/feed/FeedList.tsx
import PostCard from "./PostCard";

interface FeedListProps {
  posts: string[];
  onPostInteraction: () => void;
}

const FeedList: React.FC<FeedListProps> = ({ posts, onPostInteraction }) => {
  return (
    <div className="mt-8">
      {posts.length === 0 && (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 ring-1 ring-gray-100 p-8">
          <p className="text-center text-gray-400 text-sm">
            No posts yet. Share something to start the conversation.
          </p>
        </div>
      )}
      {posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post, idx) => (
            <PostCard key={idx} content={post} onInteraction={onPostInteraction} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedList;
