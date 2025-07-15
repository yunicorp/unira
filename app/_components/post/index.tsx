"use client";

import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share,
  Send,
  MoreHorizontal,
} from "lucide-react";
import "./style.css";

type Author = {
  username: string;
  avatar: string;
  isFollowing: boolean;
};

type PostType = {
  id: string | number;
  author: Author;
  timestamp: string;
  content: string;
  hashtags: string[];
  image?: string;
  likes: number;
  comments: number;
  isLiked: boolean;
};

type PostProps = {
  post: PostType;
  onLike: (postId: string | number) => void;
  onComment: (postId: string | number) => void;
  onShare: (postId: string | number) => void;
  onFollow: (username: string) => void;
};

const Post: React.FC<PostProps> = ({
  post,
  onLike,
  onComment,
  onShare,
  onFollow,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleLike = () => {
    onLike(post.id);
  };

  const handleComment = () => {
    onComment(post.id);
  };

  const handleShare = () => {
    onShare(post.id);
  };

  const handleFollow = () => {
    onFollow(post.author.username);
  };

  return (
    <div className="post-container">
      {/* Header */}
      <div className="post-header">
        <div className="post-author-info">
          <img
            src={post.author.avatar}
            alt={post.author.username}
            className="post-avatar"
          />
          <div className="post-author-details">
            <div className="post-author-name-container">
              <span className="post-username">@{post.author.username}</span>
              <button
                onClick={handleFollow}
                className={`post-follow-btn ${
                  post.author.isFollowing ? "following" : ""
                }`}
              >
                {post.author.isFollowing ? "Following" : "Follow"}
              </button>
            </div>
            <p className="post-timestamp">{formatDate(post.timestamp)}</p>
          </div>
        </div>
        <div className="post-menu-container">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="post-menu-btn"
          >
            <MoreHorizontal className="post-menu-icon" />
          </button>
          {showMenu && (
            <div className="post-menu-dropdown">
              <button className="post-menu-item">Report Post</button>
              <button className="post-menu-item">Hide Post</button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="post-content">
        <p className="post-text">{post.content}</p>

        {/* Hashtags */}
        <div className="post-hashtags">
          {post.hashtags.map((hashtag, index) => (
            <span key={index} className="post-hashtag">
              #{hashtag}
            </span>
          ))}
        </div>

        {/* Image */}
        {post.image && (
          <div className="post-image-container">
            <img src={post.image} alt="Post content" className="post-image" />
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="post-stats">
        <span>{post.likes} upvote</span>
        <span>{post.comments} notes</span>
      </div>

      {/* Actions */}
      <div className="post-actions">
        <button
          onClick={handleLike}
          className={`post-action-btn ${post.isLiked ? "liked" : ""}`}
        >
          <Heart
            className={`post-action-icon ${post.isLiked ? "filled" : ""}`}
          />
          <span></span>
        </button>

        <button onClick={handleComment} className="post-action-btn">
          <MessageCircle className="post-action-icon" />
          <span></span>
        </button>

        <button onClick={handleShare} className="post-action-btn">
          <Share className="post-action-icon" />
          <span></span>
        </button>

        <button className="post-action-btn">
          <Send className="post-action-icon" />
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Post;
