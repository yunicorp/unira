"use client";

import React, { useState } from "react";
import "./style.css";

interface Following {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

interface FollowingListProps {
  userId?: string;
  userName?: string;
}

const FollowingList: React.FC<FollowingListProps> = ({
  userId = "stivemongraphy",
  userName = "stivemongraphy",
}) => {
  const [following, setFollowing] = useState<Following[]>([
    {
      id: "1",
      name: "soupergenevictory",
      username: "@soupergenevictory",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "2",
      name: "izzimacbigflorist",
      username: "@izzimacbigflorist",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "3",
      name: "gamingfreemix",
      username: "@gamingfreemix",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "4",
      name: "enasjonsmith",
      username: "@enasjonsmith",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "5",
      name: "soeuftoledish",
      username: "@soeuftoledish",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "6",
      name: "roberttoking",
      username: "@roberttoking",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "7",
      name: "eljenny",
      username: "@eljenny",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
  ]);

  const handleUnfollow = (followingId: string) => {
    setFollowing(
      following.map((user) =>
        user.id === followingId ? { ...user, isFollowing: false } : user
      )
    );
  };

  const handleFollow = (followingId: string) => {
    setFollowing(
      following.map((user) =>
        user.id === followingId ? { ...user, isFollowing: true } : user
      )
    );
  };

  const handleMessage = (followingId: string) => {
    console.log("Send message to:", followingId);
  };

  const handleBack = () => {
    console.log("Navigate back");
  };

  const handleSearch = () => {
    console.log("Search following");
  };

  const handleMore = () => {
    console.log("More options");
  };

  return (
    <div className="following-container">
      <header className="following-header">
        <div className="header-left">
          <button className="back-btn" onClick={handleBack}>
            <span className="back-icon">←</span>
          </button>
          <div className="header-info">
            <h1 className="header-title">{userName}</h1>
          </div>
        </div>
        <div className="header-right">
          <button className="header-action-btn" onClick={handleSearch}>
            <span className="action-icon">🔍</span>
          </button>
          <button className="header-action-btn" onClick={handleMore}>
            <span className="action-icon">⋮</span>
          </button>
        </div>
      </header>

      {/* <div className="user-stats">
        <div className="user-avatar-section">
          <img
            src="/api/placeholder/80/80"
            alt={userName}
            className="user-main-avatar"
          />
          <h2 className="user-display-name">{userName}</h2>
          <p className="user-bio">
            30th September 1 giraffe evidence a 2008, waving home. learning, an
            police &amp; do a life
          </p>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-number">25</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">432</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">389</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1.3k</span>
            <span className="stat-label">Likes</span>
          </div>
        </div>
      </div> */}

      <div className="following-list">
        <h3 className="following-list-title">Following</h3>

        {following.map((user) => (
          <div key={user.id} className="following-item">
            <div className="following-info">
              <img
                src="https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=c76ada1ecc713de046b2177a409078be92fa8860"
                alt={user.name}
                className="following-avatar"
              />
              <div className="following-details">
                <span className="following-name">{user.name}</span>
                <span className="following-username">{user.username}</span>
              </div>
            </div>

            <div className="following-actions">
              <button
                className="message-btn"
                onClick={() => handleMessage(user.id)}
                title="Send message"
              >
                <span className="message-icon">✉️</span>
              </button>
              {user.isFollowing ? (
                <button
                  className="unfollow-btn"
                  onClick={() => handleUnfollow(user.id)}
                  title="Unfollow"
                >
                  <span className="unfollow-icon">✅</span>
                </button>
              ) : (
                <button
                  className="follow-btn"
                  onClick={() => handleFollow(user.id)}
                  title="Follow"
                >
                  <span className="follow-icon">➕</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowingList;
