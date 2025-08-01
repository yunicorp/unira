"use client";

import React, { useState } from "react";
import "./style.css";
import Link from "next/link";

interface User {
  id: string;
  username: string;
  avatar: string;
  joinDate: string;
  bio: string;
  entries: number;
  followers: number;
  following: number;
  likes: number;
}

interface Post {
  id: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  hashtags: string[];
}

const Profile: React.FC = () => {
  const [user] = useState<User>({
    id: "1",
    username: "eleanorengby",
    avatar: "/api/placeholder/120/120",
    joinDate: "June 21th, 2024",
    bio: "Join campus this summer! Submit your previous 3 GPAs. There's nothing to writing, always on is as it is a typewriter.",
    entries: 2,
    followers: 563,
    following: 49,
    likes: 1,
  });

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      content: "All those lazy people, where do they come from?",
      timestamp: "4h",
      likes: 200,
      comments: 0,
      shares: 0,
      isLiked: false,
      hashtags: ["#discussion", "#newbies"],
    },
    {
      id: "2",
      content:
        "So I walked back to my room and collapsed on the nearest bed, thinking that if people were thin. I was dizzy and she was a hurricane.",
      timestamp: "6h",
      likes: 87,
      comments: 0,
      shares: 0,
      isLiked: false,
      hashtags: ["#personal", "#storytime"],
    },
  ]);

  const [activeTab, setActiveTab] = useState<"posts" | "about">("posts");

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

  const handleFollow = () => {
    console.log("Follow/Unfollow clicked");
  };

  const handleMessage = () => {
    console.log("Message clicked");
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  const handleComment = () => {
    console.log("Comment clicked");
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="header-left">
          <button className="back-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="header-title">
            <span className="username">@{user.username}</span>
          </div>
        </div>
        <div className="header-right">
          {/* <button className="header-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button> */}
          <Link href="/dashboard/profile/notification">
            <button className="header-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>
          </Link>
          <Link href="/dashboard/profile/setting">
            <button className="header-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </button>
          </Link>
        </div>
      </header>

      <div className="profile-info-section">
        <div className="profile-main-info">
          <div className="profile-avatar-container">
            <img
              src="https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=c76ada1ecc713de046b2177a409078be92fa8860"
              alt={user.username}
              className="profile-avatar"
            />
          </div>
          <div className="profile-details">
            <h1>@{user.username}</h1>
            <p className="join-date">{user.joinDate}</p>
            <p className="bio">{user.bio}</p>
          </div>
        </div>

        <div className="profile-stats-row">
          <div className="stat-box">
            <span className="stat-number">{user.entries}</span>
            <span className="stat-label">Entries</span>
          </div>
          <Link href="/dashboard/profile/followers">
            <div className="stat-box">
              <span className="stat-number">{user.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
          </Link>
          <Link href="/dashboard/profile/following">
            <div className="stat-box">
              <span className="stat-number">{user.following}</span>
              <span className="stat-label">Following</span>
            </div>
          </Link>

          <div className="stat-box">
            <span className="stat-number">{user.likes}</span>
            <span className="stat-label">Likes</span>
          </div>
        </div>

        {/* <div className="profile-actions">
          <button className="follow-btn" onClick={handleFollow}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            Follow
          </button>
          <button className="message-btn" onClick={handleMessage}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Message
          </button>
        </div> */}
      </div>

      {/* <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === "posts" ? "active" : ""}`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
      </div> */}

      <div className="profile-content">
        {activeTab === "posts" && (
          <div className="posts-section">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="post-user-info">
                    <img
                      src="https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=c76ada1ecc713de046b2177a409078be92fa8860"
                      alt={user.username}
                      className="user-avatar"
                    />
                    <div className="user-details">
                      <h4>@{user.username}</h4>
                      <span className="post-date">{user.joinDate}</span>
                    </div>
                  </div>
                  <button className="post-menu-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>

                <div className="post-content">
                  <p>{post.content}</p>
                  <div className="post-hashtags">
                    {post.hashtags.map((tag, index) => (
                      <span key={index} className="hashtag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="post-footer">
                  <div className="post-actions">
                    <button
                      className={`action-btn ${post.isLiked ? "liked" : ""}`}
                      onClick={() => handleLike(post.id)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={post.isLiked ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span>{post.likes}</span>
                    </button>

                    <button className="action-btn" onClick={handleComment}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>{post.comments}</span>
                    </button>

                    <button className="action-btn" onClick={handleShare}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16,6 12,2 8,6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                      <span>{post.shares}</span>
                    </button>
                  </div>

                  <div className="post-timestamp">
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "about" && (
          <div className="about-section">
            <div className="about-card">
              <h3>About</h3>
              <p>{user.bio}</p>

              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-label">Joined:</span>
                  <span className="detail-value">{user.joinDate}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Total Posts:</span>
                  <span className="detail-value">{user.entries}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Total Likes Received:</span>
                  <span className="detail-value">{user.likes}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
