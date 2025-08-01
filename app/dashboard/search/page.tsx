"use client";

import React, { useState } from "react";
import "./style.css";

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isVerified?: boolean;
}

interface Post {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  category?: string;
}

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      user: {
        id: "1",
        name: "felixloukanna",
        username: "@felixloukanna",
        avatar: "/api/placeholder/40/40",
        isVerified: false,
      },
      content:
        "We are all going, I thought, and it applies to turtles and turnips, Aleska the cat and Aleska the place with the double Aleska, and my father's shoes, my arrow, and my knife...",
      timestamp: "15h ago",
      likes: 12,
      comments: 3,
      shares: 1,
      isLiked: false,
      category: "General",
    },
    {
      id: "2",
      user: {
        id: "2",
        name: "rebekaanmoc",
        username: "@rebekaanmoc",
        avatar: "/api/placeholder/40/40",
        isVerified: false,
      },
      content:
        "Win shall love your neighbor thyself. If says so much about love and brokenness — it's perfect.",
      timestamp: "2d ago",
      likes: 8,
      comments: 5,
      shares: 2,
      isLiked: true,
    },
    {
      id: "3",
      user: {
        id: "3",
        name: "jayshard",
        username: "@jayshard",
        avatar: "/api/placeholder/40/40",
        isVerified: false,
      },
      content: "I don't know how to talk about this riddle hole.",
      timestamp: "3d ago",
      likes: 24,
      comments: 7,
      shares: 4,
      isLiked: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleComment = (postId: string) => {
    // Handle comment functionality
    console.log("Comment on post:", postId);
  };

  const handleShare = (postId: string) => {
    // Handle share functionality
    console.log("Share post:", postId);
  };

  const handleMore = (postId: string) => {
    // Handle more options
    console.log("More options for post:", postId);
  };

  return (
    <div className="forum-container">
      <header className="forum-header">
        <div className="header-icons">
          <h2>Search</h2>
        </div>
      </header>

      <main className="forum-main">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="What are you searching for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <div className="search-icons">
              <button className="search-icon-btn">🔍</button>
            </div>
          </div>
        </div>

        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="user-info">
                  <img
                    src="https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=c76ada1ecc713de046b2177a409078be92fa8860"
                    alt={post.user.name}
                    className="user-avatar"
                  />
                  <div className="user-details">
                    <span className="user-name">{post.user.name}</span>
                    <span className="user-username">{post.user.username}</span>
                  </div>
                </div>
                <div className="post-meta">
                  {post.category && (
                    <span className="post-category">{post.category}</span>
                  )}
                  <span className="post-timestamp">{post.timestamp}</span>
                  <button
                    className="more-btn"
                    onClick={() => handleMore(post.id)}
                  >
                    ⋮
                  </button>
                </div>
              </div>

              <div className="post-content">
                <p>{post.content}</p>
              </div>

              <div className="post-actions">
                <button
                  className={`action-btn like-btn ${
                    post.isLiked ? "liked" : ""
                  }`}
                  onClick={() => handleLike(post.id)}
                >
                  <span className="action-icon">♡</span>
                  <span className="action-count">{post.likes}</span>
                </button>

                <button
                  className="action-btn comment-btn"
                  onClick={() => handleComment(post.id)}
                >
                  <span className="action-icon">💬</span>
                  <span className="action-count">{post.comments}</span>
                </button>

                <button
                  className="action-btn share-btn"
                  onClick={() => handleShare(post.id)}
                >
                  <span className="action-icon">↗</span>
                  <span className="action-count">{post.shares}</span>
                </button>

                <button className="action-btn bookmark-btn">
                  <span className="action-icon">🔖</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Forum;
