"use client";

import React, { useState, useEffect } from "react";
import { Users, Camera, MessageSquare, Store } from "lucide-react";
import Post from "../../_components/post";
import Link from "next/link";
import "./style.css";
import { useSelector } from "react-redux";

type PostType = {
  id: string;
  author: {
    username: string;
    avatar: string;
    isFollowing: boolean;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  hashtags: string[];
  isLiked: boolean;
  image?: string;
};

const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  const reduxSelector = useSelector((store: any) => store.post);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockPosts = [
      {
        id: "1",
        author: {
          username: "lipsinmirrors",
          avatar:
            "https://styles.redditmedia.com/t5_50xgtt/styles/communityIcon_akyq386y6lpb1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=c76ada1ecc713de046b2177a409078be92fa8860",
          isFollowing: true,
        },
        content:
          "Every poke feels like a burn, it's like I don't feel the pain but I can sense it. I'm not hurt or angry, I just feel threatened all the time.",
        timestamp: "2024-04-15T10:30:00Z",
        likes: 1684,
        comments: 42,
        shares: 23,
        hashtags: [
          "midnightthoughts",
          "overflowingemotion",
          "latenightrants",
          "dareldisturbtheuniverse",
        ],
        isLiked: true,
      },
      {
        id: "2",
        author: {
          username: "fatalflow",
          avatar:
            "https://styles.redditmedia.com/t5_5kzsg2/styles/communityIcon_enxbot399r5f1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=05ccf3fce58bea1aad9dcfaf599a8ccc03b7aa3c",
          isFollowing: true,
        },
        content:
          "Do you ever feel the urge to rip your skin from all that thorough shame? I know I do, all the time.",
        timestamp: "2024-04-01T14:20:00Z",
        likes: 184,
        comments: 28,
        shares: 12,
        hashtags: [
          "shame",
          "self-shamingthoughts",
          "overwhelmed",
          "caretorelate",
          "latenightthoughts",
        ],
        isLiked: false,
      },
      {
        id: "3",
        author: {
          username: "Mayank",
          avatar:
            "https://styles.redditmedia.com/t5_24rv69/styles/communityIcon_ec3jyf50mr091.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=200c9791e77d2e7c4e81c8157623ac6c13e704af",
          isFollowing: false,
        },
        content:
          "Check out my vintage cassette collection! Found these gems at a local thrift store. Music from the 80s and 90s hits different on analog.",
        image:
          "https://preview.redd.it/i-just-wanna-buy-jerseys-and-cool-things-with-my-money-why-v0-oichvgrh3zcf1.jpeg?width=1080&crop=smart&auto=webp&s=0650c28040f1c1fe63fc040ce6d70357d683abae",
        timestamp: "2024-03-23T09:15:00Z",
        likes: 342,
        comments: 67,
        shares: 45,
        hashtags: ["vintage", "cassettes", "music", "thrifting", "analog"],
        isLiked: false,
      },
    ];

    // Simulate API loading
    setTimeout(() => {
      setPosts(reduxSelector);
      // setPosts(mockPosts);

      setLoading(false);
    }, 1000);
  }, []);

  const renderLoadingSkeleton = () => (
    <div className="loading-container">
      {[1, 2, 3].map((i) => (
        <div key={i} className="loading-skeleton">
          <div className="loading-header">
            <div className="loading-avatar"></div>
            <div className="loading-text-container">
              <div className="loading-text loading-username"></div>
              <div className="loading-text loading-timestamp"></div>
            </div>
          </div>
          <div className="loading-content">
            <div className="loading-text loading-line"></div>
            <div className="loading-text loading-line-short"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="feed-container">
      {/* Main Content */}
      <main className="feed-main">
        <div className="feed-layout">
          {/* Left Sidebar */}
          <div className="feed-sidebar">
            <div className="sidebar-card">
              <h2 className="sidebar-title">Quick Actions</h2>
              <div className="sidebar-actions">
                <Link href="/dashboard/feed/gptSearch" className="gptSearch">
                  <button className="sidebar-action-btn">
                    <MessageSquare className="sidebar-action-icon question" />
                    <span>Ask a Question</span>
                  </button>
                </Link>
                <button className="sidebar-action-btn">
                  <Users className="sidebar-action-icon study" />
                  <span>Find Study Groups</span>
                </button>
                <button className="sidebar-action-btn">
                  <Camera className="sidebar-action-icon event" />
                  <span>Share Event</span>
                </button>
              </div>
            </div>

            <div className="sidebar-card">
              <h2 className="sidebar-title">Popular Tags</h2>
              <div className="sidebar-tags">
                {[
                  "studygroup",
                  "events",
                  "assignments",
                  "clubs",
                  "sports",
                  "tech",
                ].map((tag) => (
                  <span key={tag} className="sidebar-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="feed-content">
            {loading ? (
              renderLoadingSkeleton()
            ) : (
              <div className="feed-posts">
                {posts.toReversed().map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                    onLike={() => {}}
                    onComment={() => {}}
                    onShare={() => {}}
                    onFollow={() => {}}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
