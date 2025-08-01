"use client";

import React, { useState } from "react";
import "./style.css";

interface Follower {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

interface FollowersListProps {
  userId?: string;
  userName?: string;
}

const FollowersList: React.FC<FollowersListProps> = ({
  userId = "stivemongraphy",
  userName = "stivemongraphy",
}) => {
  const [followers, setFollowers] = useState<Follower[]>([
    {
      id: "1",
      name: "andreafrancis",
      username: "@andreafrancis",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "2",
      name: "chantalelisha",
      username: "@chantalelisha",
      avatar: "/api/placeholder/50/50",
      isFollowing: false,
    },
    {
      id: "3",
      name: "susannnesmith",
      username: "@susannnesmith",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "4",
      name: "marcusieblogsh",
      username: "@marcusieblogsh",
      avatar: "/api/placeholder/50/50",
      isFollowing: false,
    },
    {
      id: "5",
      name: "jasikesugene",
      username: "@jasikesugene",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
    {
      id: "6",
      name: "roberttking",
      username: "@roberttking",
      avatar: "/api/placeholder/50/50",
      isFollowing: false,
    },
    {
      id: "7",
      name: "jennytommie",
      username: "@jennytommie",
      avatar: "/api/placeholder/50/50",
      isFollowing: true,
    },
  ]);

  const handleFollowToggle = (followerId: string) => {
    setFollowers(
      followers.map((follower) =>
        follower.id === followerId
          ? { ...follower, isFollowing: !follower.isFollowing }
          : follower
      )
    );
  };

  const handleMessage = (followerId: string) => {
    console.log("Send message to:", followerId);
  };

  const handleBack = () => {
    console.log("Navigate back");
  };

  const handleSearch = () => {
    console.log("Search followers");
  };

  const handleMore = () => {
    console.log("More options");
  };

  return (
    <div className="followers-container">
      <header className="followers-header">
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

      <div className="followers-list">
        <h3 className="followers-list-title">Followers</h3>

        {followers.map((follower) => (
          <div key={follower.id} className="follower-item">
            <div className="follower-info">
              <img
                src="https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=c76ada1ecc713de046b2177a409078be92fa8860"
                alt={follower.name}
                className="follower-avatar"
              />
              <div className="follower-details">
                <span className="follower-name">{follower.name}</span>
                <span className="follower-username">{follower.username}</span>
              </div>
            </div>

            <div className="follower-actions">
              <button
                className="message-btn"
                onClick={() => handleMessage(follower.id)}
                title="Send message"
              >
                <span className="message-icon">✉️</span>
              </button>
              <button
                className={`follow-btn ${
                  follower.isFollowing ? "following" : "not-following"
                }`}
                onClick={() => handleFollowToggle(follower.id)}
              >
                <span className="follow-icon">
                  {follower.isFollowing ? "✅" : "➕"}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowersList;
