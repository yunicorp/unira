// pages/clubs.tsx or components/ClubsPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "./ClubsPage.module.css";

interface Post {
  id: string;
  username: string;
  userHandle: string;
  profileImage: string;
  content: string;
  hashtags: string[];
  upvotes: number;
  notes: number;
  date: string;
  isFollowing: boolean;
  isClubPost: boolean;
  clubName?: string;
}

interface Club {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  isJoined: boolean;
}

const ClubsPage: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [clubs, setClubs] = useState<Club[]>([]);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockClubs: Club[] = [
      {
        id: "1",
        name: "Tech Club",
        description: "Coding, hackathons, and technology discussions",
        memberCount: 156,
        isJoined: true,
      },
      {
        id: "2",
        name: "Drama Society",
        description: "Theater, acting, and performing arts",
        memberCount: 89,
        isJoined: false,
      },
      {
        id: "3",
        name: "Photography Club",
        description: "Capture moments, share perspectives",
        memberCount: 234,
        isJoined: true,
      },
      {
        id: "4",
        name: "Literary Society",
        description: "Books, poetry, and creative writing",
        memberCount: 67,
        isJoined: false,
      },
    ];

    const mockPosts: Post[] = [
      {
        id: "1",
        username: "Tech Enthusiast",
        userHandle: "@techclub_admin",
        profileImage: "🚀",
        content:
          "Exciting news! Our annual hackathon is scheduled for next month. Registration opens tomorrow. Get ready to code your way to victory! #hackathon #coding",
        hashtags: ["#hackathon", "#coding", "#techclub"],
        upvotes: 245,
        notes: 18,
        date: "Apr 20, 2024",
        isFollowing: true,
        isClubPost: true,
        clubName: "Tech Club",
      },
      {
        id: "2",
        username: "Drama Queen",
        userHandle: "@dramatics",
        profileImage: "🎭",
        content:
          'Auditions for our upcoming play "Romeo and Juliet" start this Friday. All students welcome! No prior experience needed. #drama #auditions',
        hashtags: ["#drama", "#auditions", "#theater"],
        upvotes: 89,
        notes: 12,
        date: "Apr 18, 2024",
        isFollowing: false,
        isClubPost: true,
        clubName: "Drama Society",
      },
      {
        id: "3",
        username: "Lens Master",
        userHandle: "@photoclub",
        profileImage: "📸",
        content:
          "Golden hour photography workshop this Sunday at 5 PM near the campus lake. Bring your cameras and lets capture some magic! #photography #workshop",
        hashtags: ["#photography", "#workshop", "#goldenhour"],
        upvotes: 156,
        notes: 25,
        date: "Apr 16, 2024",
        isFollowing: true,
        isClubPost: true,
        clubName: "Photography Club",
      },
      {
        id: "4",
        username: "Word Smith",
        userHandle: "@literaryclub",
        profileImage: "📚",
        content:
          'Book discussion on "1984" by George Orwell this Thursday. Join us for an engaging conversation about dystopian literature. #books #discussion',
        hashtags: ["#books", "#discussion", "#literature"],
        upvotes: 78,
        notes: 15,
        date: "Apr 14, 2024",
        isFollowing: false,
        isClubPost: true,
        clubName: "Literary Society",
      },
    ];

    setClubs(mockClubs);
    setPosts(mockPosts);
  }, []);

  const filteredPosts = selectedClub
    ? posts.filter(
        (post) =>
          post.clubName === clubs.find((club) => club.id === selectedClub)?.name
      )
    : posts;

  const handleClubSelect = (clubId: string) => {
    setSelectedClub(clubId === selectedClub ? null : clubId);
  };

  const handleJoinClub = (clubId: string) => {
    setClubs(
      clubs.map((club) =>
        club.id === clubId
          ? {
              ...club,
              isJoined: !club.isJoined,
              memberCount: club.isJoined
                ? club.memberCount - 1
                : club.memberCount + 1,
            }
          : club
      )
    );
  };

  const handleFollow = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, isFollowing: !post.isFollowing } : post
      )
    );
  };

  const handleUpvote = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );
  };

  return (
    <div className={styles.clubsPage}>
      {/* Header */}
      {/* <header className={styles.header}>
        <h1 className={styles.logo}>UNIRA</h1>
        <nav className={styles.nav}>
          <button className={styles.navButton}>
            <span className={styles.navIcon}>#</span>
            Feed
          </button>
          <button className={styles.navButton}>
            <span className={styles.navIcon}>⭐</span>
            Explore
          </button>
          <button className={`${styles.navButton} ${styles.active}`}>
            <span className={styles.navIcon}>👥</span>
            Clubs
          </button>
        </nav>
      </header> */}

      <div className={styles.container}>
        {/* Search and Post Button */}
        {/* <div className={styles.actionBar}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search clubs or posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <button className={styles.postButton}>
            <span className={styles.plusIcon}>+</span>
            Post
          </button>
        </div> */}

        <div className={styles.content}>
          {/* Clubs Sidebar */}
          <aside className={styles.clubsSidebar}>
            <h2 className={styles.sidebarTitle}>Clubs</h2>
            <div className={styles.clubsList}>
              {clubs.map((club) => (
                <div
                  key={club.id}
                  className={`${styles.clubCard} ${
                    selectedClub === club.id ? styles.selectedClub : ""
                  }`}
                  onClick={() => handleClubSelect(club.id)}
                >
                  <div className={styles.clubInfo}>
                    <h3 className={styles.clubName}>{club.name}</h3>
                    <p className={styles.clubDescription}>{club.description}</p>
                    <span className={styles.memberCount}>
                      {club.memberCount} members
                    </span>
                  </div>
                  <button
                    className={`${styles.joinButton} ${
                      club.isJoined ? styles.joined : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleJoinClub(club.id);
                    }}
                  >
                    {club.isJoined ? "Joined" : "Join"}
                  </button>
                </div>
              ))}
            </div>
          </aside>

          {/* Posts Feed */}
          <main className={styles.postsContainer}>
            <div className={styles.feedHeader}>
              <h2>
                {selectedClub
                  ? `${clubs.find((c) => c.id === selectedClub)?.name} Posts`
                  : "All Club Posts"}
              </h2>
              {selectedClub && (
                <button
                  className={styles.clearFilter}
                  onClick={() => setSelectedClub(null)}
                >
                  Show All Clubs
                </button>
              )}
            </div>

            <div className={styles.postsList}>
              {filteredPosts.map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <header className={styles.postHeader}>
                    <div className={styles.userInfo}>
                      <div className={styles.profileImage}>
                        {post.profileImage}
                      </div>
                      <div className={styles.userDetails}>
                        <div className={styles.userName}>{post.username}</div>
                        <div className={styles.userHandle}>
                          {post.userHandle}
                        </div>
                        <div className={styles.postDate}>{post.date}</div>
                        {post.clubName && (
                          <div className={styles.clubBadge}>
                            {post.clubName}
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      className={`${styles.followButton} ${
                        post.isFollowing ? styles.following : ""
                      }`}
                      onClick={() => handleFollow(post.id)}
                    >
                      {post.isFollowing ? "Following" : "Follow"}
                    </button>
                  </header>

                  <div className={styles.postContent}>
                    <p>{post.content}</p>
                    <div className={styles.hashtags}>
                      {post.hashtags.map((tag, index) => (
                        <span key={index} className={styles.hashtag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <footer className={styles.postFooter}>
                    <div className={styles.postStats}>
                      <span>{post.upvotes} upvotes</span>
                      <span>{post.notes} notes</span>
                    </div>
                    <div className={styles.postActions}>
                      <button
                        className={styles.actionButton}
                        onClick={() => handleUpvote(post.id)}
                      >
                        ❤️
                      </button>
                      <button className={styles.actionButton}>💬</button>
                      <button className={styles.actionButton}>📤</button>
                      <button className={styles.actionButton}>✈️</button>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClubsPage;
