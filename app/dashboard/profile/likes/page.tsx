"use client";

import React from "react";
import "./style.css";

interface Like {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
  likedAt: string;
  isFollowing?: boolean;
}

interface LikesListProps {
  likes: Like[];
  onFollowToggle?: (userId: string) => void;
  onUserClick?: (userId: string) => void;
  showFollowButton?: boolean;
}

const LikesList: React.FC<LikesListProps> = ({
  likes,
  onFollowToggle,
  onUserClick,
  showFollowButton = true,
}) => {
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="likes-container">
      <div className="likes-header">
        <div className="likes-title">
          <svg className="heart-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <h2>Likes</h2>
        </div>
        <span className="likes-count">{likes.length}</span>
      </div>

      <div className="likes-list">
        {likes.map((like) => (
          <div key={like.id} className="like-card">
            <div
              className="like-user-info"
              onClick={() => onUserClick?.(like.userId)}
            >
              <div className="like-avatar">
                <img src={like.avatar} alt={`${like.displayName}'s avatar`} />
              </div>

              <div className="like-details">
                <div className="like-user-names">
                  <h3 className="like-display-name">{like.displayName}</h3>
                  <span className="like-username">@{like.username}</span>
                </div>
                {like.bio && <p className="like-user-bio">{like.bio}</p>}
                <div className="like-timestamp">
                  <svg
                    className="heart-small-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>Liked {formatTimeAgo(like.likedAt)}</span>
                </div>
              </div>
            </div>

            {showFollowButton && onFollowToggle && (
              <div className="like-actions">
                <button
                  className={`follow-btn ${
                    like.isFollowing ? "following" : "not-following"
                  }`}
                  onClick={() => onFollowToggle(like.userId)}
                >
                  {like.isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {likes.length === 0 && (
        <div className="no-likes">
          <svg
            className="empty-heart-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p>No likes yet</p>
          <span>Be the first to show some love!</span>
        </div>
      )}
    </div>
  );
};

export default LikesList;
