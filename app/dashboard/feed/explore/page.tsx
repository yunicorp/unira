// pages/explore.tsx or components/ExplorePage.tsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "./ExplorePage.module.css";

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
  category: "academic" | "club" | "general" | "event" | "query";
  isPopular?: boolean;
  isTrending?: boolean;
}

interface TrendingTopic {
  id: string;
  hashtag: string;
  posts: number;
  category: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  postCount: number;
}

const ExplorePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [trendingTopics, setTrendingTopics] = useState<TrendingTopic[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"trending" | "popular" | "recent">(
    "trending"
  );

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockTrendingTopics: TrendingTopic[] = [
      { id: "1", hashtag: "#examprep", posts: 156, category: "Academic" },
      { id: "2", hashtag: "#techfest2024", posts: 234, category: "Events" },
      { id: "3", hashtag: "#placementdrive", posts: 189, category: "Career" },
      { id: "4", hashtag: "#culturalnight", posts: 145, category: "Events" },
      { id: "5", hashtag: "#studygroup", posts: 98, category: "Academic" },
      { id: "6", hashtag: "#hackathon", posts: 176, category: "Tech" },
      { id: "7", hashtag: "#internship", posts: 123, category: "Career" },
      { id: "8", hashtag: "#photography", posts: 87, category: "Hobbies" },
    ];

    const mockCategories: Category[] = [
      {
        id: "all",
        name: "All",
        icon: "🌟",
        description: "All posts",
        postCount: 1250,
      },
      {
        id: "academic",
        name: "Academic",
        icon: "📚",
        description: "Study materials, assignments, exams",
        postCount: 456,
      },
      {
        id: "club",
        name: "Clubs",
        icon: "🎭",
        description: "Club activities and events",
        postCount: 234,
      },
      {
        id: "event",
        name: "Events",
        icon: "🎉",
        description: "College events and festivals",
        postCount: 189,
      },
      {
        id: "query",
        name: "Q&A",
        icon: "❓",
        description: "Questions and answers",
        postCount: 298,
      },
      {
        id: "general",
        name: "General",
        icon: "💬",
        description: "General discussions",
        postCount: 73,
      },
    ];

    const mockPosts: Post[] = [
      {
        id: "1",
        username: "Study Buddy",
        userHandle: "@studyhelper",
        profileImage: "👨‍🎓",
        content:
          "Anyone forming a study group for Advanced Mathematics? The final exam is approaching and I think group study would be really helpful. DM me if interested! #studygroup #mathematics",
        hashtags: ["#studygroup", "#mathematics", "#examprep"],
        upvotes: 89,
        notes: 23,
        date: "Apr 25, 2024",
        isFollowing: false,
        category: "academic",
        isPopular: true,
        isTrending: true,
      },
      {
        id: "2",
        username: "Tech Enthusiast",
        userHandle: "@codemaster",
        profileImage: "💻",
        content:
          "Just finished building my first React Native app! The learning curve was steep but totally worth it. Happy to share resources with anyone interested in mobile development. #reactnative #mobiledev #coding",
        hashtags: ["#reactnative", "#mobiledev", "#coding"],
        upvotes: 156,
        notes: 31,
        date: "Apr 24, 2024",
        isFollowing: true,
        category: "general",
        isPopular: true,
      },
      {
        id: "3",
        username: "Event Coordinator",
        userHandle: "@eventplanner",
        profileImage: "🎪",
        content:
          "Tech Fest 2024 registrations are now open! This year we have amazing speakers from top tech companies. Early bird discount available till next week. Link in bio! #techfest2024 #events",
        hashtags: ["#techfest2024", "#events", "#technology"],
        upvotes: 234,
        notes: 45,
        date: "Apr 23, 2024",
        isFollowing: false,
        category: "event",
        isTrending: true,
      },
      {
        id: "4",
        username: "Career Guide",
        userHandle: "@careerhelp",
        profileImage: "💼",
        content:
          "Placement drive starts next month! Here are some tips: 1) Update your resume 2) Practice coding problems 3) Prepare for HR questions 4) Research companies. Good luck everyone! #placement #career #tips",
        hashtags: ["#placement", "#career", "#tips"],
        upvotes: 198,
        notes: 67,
        date: "Apr 22, 2024",
        isFollowing: true,
        category: "general",
        isPopular: true,
      },
      {
        id: "5",
        username: "Query Helper",
        userHandle: "@helpdesk",
        profileImage: "🤔",
        content:
          "Can someone explain the difference between REST and GraphQL APIs? I have an assignment due tomorrow and I'm still confused about when to use which one. Any help would be appreciated! #help #apis #webdev",
        hashtags: ["#help", "#apis", "#webdev"],
        upvotes: 45,
        notes: 18,
        date: "Apr 21, 2024",
        isFollowing: false,
        category: "query",
      },
      {
        id: "6",
        username: "Culture Club",
        userHandle: "@culturalteam",
        profileImage: "🎨",
        content:
          "Cultural Night preparations are in full swing! We need volunteers for decoration, sound setup, and hospitality. This is going to be our biggest event this year! #culturalnight #volunteers",
        hashtags: ["#culturalnight", "#volunteers", "#culture"],
        upvotes: 112,
        notes: 29,
        date: "Apr 20, 2024",
        isFollowing: true,
        category: "club",
        isTrending: true,
      },
    ];

    setTrendingTopics(mockTrendingTopics);
    setCategories(mockCategories);
    setPosts(mockPosts);
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.hashtags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      post.username.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "trending")
      return matchesCategory && matchesSearch && post.isTrending;
    if (activeTab === "popular")
      return matchesCategory && matchesSearch && post.isPopular;
    return matchesCategory && matchesSearch;
  });

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
    <div className={styles.explorePage}>
      {/* Header */}
      {/* <header className={styles.header}>
        <h1 className={styles.logo}>UNIRA</h1>
        <h3>Explore</h3>
      </header> */}

      <div className={styles.container}>
        {/* Search and Post Button */}
        {/* <div className={styles.actionBar}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search posts, topics, or users..."
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
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Trending Topics */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sectionTitle}>Trending Topics</h3>
              <div className={styles.trendingList}>
                {trendingTopics.slice(0, 6).map((topic) => (
                  <div key={topic.id} className={styles.trendingItem}>
                    <div className={styles.trendingInfo}>
                      <span className={styles.hashtag}>{topic.hashtag}</span>
                      <span className={styles.trendingStats}>
                        {topic.posts} posts
                      </span>
                    </div>
                    <span className={styles.trendingCategory}>
                      {topic.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sectionTitle}>Categories</h3>
              <div className={styles.categoriesList}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`${styles.categoryItem} ${
                      selectedCategory === category.id
                        ? styles.selectedCategory
                        : ""
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <div className={styles.categoryInfo}>
                      <span className={styles.categoryName}>
                        {category.name}
                      </span>
                      <span className={styles.categoryCount}>
                        {category.postCount} posts
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  activeTab === "trending" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("trending")}
              >
                🔥 Trending
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "popular" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("popular")}
              >
                ⭐ Popular
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "recent" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("recent")}
              >
                🕒 Recent
              </button>
            </div>

            {/* Posts Feed */}
            <div className={styles.postsContainer}>
              {filteredPosts.length === 0 ? (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>🔍</div>
                  <h3>No posts found</h3>
                  <p>Try adjusting your search or category filters</p>
                </div>
              ) : (
                <div className={styles.postsList}>
                  {filteredPosts.map((post) => (
                    <article key={post.id} className={styles.postCard}>
                      <header className={styles.postHeader}>
                        <div className={styles.userInfo}>
                          <div className={styles.profileImage}>
                            {post.profileImage}
                          </div>
                          <div className={styles.userDetails}>
                            <div className={styles.userName}>
                              {post.username}
                            </div>
                            <div className={styles.userHandle}>
                              {post.userHandle}
                            </div>
                            <div className={styles.postDate}>{post.date}</div>
                          </div>
                          <div className={styles.postBadges}>
                            {post.isTrending && (
                              <span className={styles.badge}>🔥 Trending</span>
                            )}
                            {post.isPopular && (
                              <span className={styles.badge}>⭐ Popular</span>
                            )}
                            <span className={styles.categoryBadge}>
                              {
                                categories.find((c) => c.id === post.category)
                                  ?.name
                              }
                            </span>
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
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
