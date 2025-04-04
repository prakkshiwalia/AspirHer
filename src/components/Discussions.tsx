import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Send } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface Discussion {
  id: number;
  title: string;
  author: string;
  content: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

const sampleDiscussions: Discussion[] = [
  {
    id: 1,
    title: "Breaking into Tech as a Woman in India",
    author: "Priya Sharma",
    content: "I recently transitioned from non-tech to tech. Here's my journey and the challenges I faced as a woman in the Indian tech industry. The support from the community was invaluable...",
    likes: 45,
    comments: [
      {
        id: 1,
        author: "Neha Singh",
        content: "Thank you for sharing your journey! I'm in a similar position and this gives me hope.",
        timestamp: "1 hour ago"
      },
      {
        id: 2,
        author: "Ritu Verma",
        content: "Would love to know more about how you prepared for technical interviews!",
        timestamp: "30 minutes ago"
      }
    ],
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    title: "Work-Life Balance in Corporate India",
    author: "Anjali Mehta",
    content: "Let's discuss strategies for maintaining work-life balance in Indian corporate culture. I've found that setting clear boundaries and communicating effectively with team members has helped me tremendously...",
    likes: 32,
    comments: [
      {
        id: 3,
        author: "Pooja Patel",
        content: "These are great tips! I've also found that blocking specific hours for deep work helps.",
        timestamp: "45 minutes ago"
      }
    ],
    timestamp: "5 hours ago"
  }
];

const Discussions: React.FC = () => {
  const [selectedDiscussion, setSelectedDiscussion] = useState<Discussion | null>(null);
  const [newComment, setNewComment] = useState('');
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleLike = (discussionId: number) => {
    if (!likedPosts.includes(discussionId)) {
      setLikedPosts([...likedPosts, discussionId]);
    } else {
      setLikedPosts(likedPosts.filter(id => id !== discussionId));
    }
  };

  const handleShare = async (discussion: Discussion) => {
    try {
      await navigator.share({
        title: discussion.title,
        text: discussion.content,
        url: window.location.href
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Discussions</h2>
        <button 
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          onClick={() => setIsNewPostModalOpen(true)}
        >
          Start New Discussion
        </button>
      </div>

      <div className="space-y-6">
        {sampleDiscussions.map(discussion => (
          <div 
            key={discussion.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 
                  className="text-xl font-semibold text-gray-800 hover:text-purple-600 cursor-pointer"
                  onClick={() => setSelectedDiscussion(discussion)}
                >
                  {discussion.title}
                </h3>
                <p className="text-sm text-gray-500">Posted by {discussion.author} • {discussion.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{discussion.content}</p>
            <div className="flex items-center space-x-6 text-gray-500">
              <button 
                className={`flex items-center space-x-2 ${likedPosts.includes(discussion.id) ? 'text-purple-600' : 'hover:text-purple-600'}`}
                onClick={() => handleLike(discussion.id)}
              >
                <Heart className={`w-5 h-5 ${likedPosts.includes(discussion.id) ? 'fill-current' : ''}`} />
                <span>{discussion.likes + (likedPosts.includes(discussion.id) ? 1 : 0)}</span>
              </button>
              <button 
                className="flex items-center space-x-2 hover:text-purple-600"
                onClick={() => setSelectedDiscussion(discussion)}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{discussion.comments.length}</span>
              </button>
              <button 
                className="flex items-center space-x-2 hover:text-purple-600"
                onClick={() => handleShare(discussion)}
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Discussion Modal */}
      {selectedDiscussion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedDiscussion.title}</h3>
                <p className="text-sm text-gray-500">Posted by {selectedDiscussion.author} • {selectedDiscussion.timestamp}</p>
              </div>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedDiscussion(null)}
              >
                ✕
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">{selectedDiscussion.content}</p>
            
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-gray-800">Comments</h4>
              {selectedDiscussion.comments.map(comment => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-800">{comment.author}</span>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-600">{comment.content}</p>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Post Modal */}
      {isNewPostModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">Start New Discussion</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsNewPostModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter discussion title..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={5}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Share your thoughts..."
                />
              </div>

              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                Post Discussion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discussions;