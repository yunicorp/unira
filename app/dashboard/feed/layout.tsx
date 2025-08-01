"use client";

import React, { useState } from "react";
import { Hash, Sparkles, Users, Search, Plus } from "lucide-react";
import BottomNav from "../../_components/buttonNav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./layout.css";
import appStore from "@/utils/appStore";
import { Provider } from "react-redux";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <Provider store={appStore}>
      <div className="dashboard-layout">
        {/* Header */}
        <header className="feed-header">
          <div className="feed-header-content">
            <div className="feed-header-left">
              <h1 className="feed-title">UNIRA</h1>

              {/* Navigation Tabs */}
              <nav className="feed-nav">
                <Link href="/dashboard/feed">
                  <button
                    onClick={() => setActiveTab("feed")}
                    className={`feed-nav-btn ${
                      activeTab === "feed" ? "active" : ""
                    }`}
                  >
                    <Hash className="feed-nav-icon" />
                    <span>Feed</span>
                  </button>
                </Link>

                <Link href="/dashboard/feed/explore">
                  <button
                    onClick={() => setActiveTab("explore")}
                    className={`feed-nav-btn ${
                      activeTab === "explore" ? "active" : ""
                    }`}
                  >
                    <Sparkles className="feed-nav-icon" />
                    <span>Explore</span>
                  </button>
                </Link>

                <Link href="/dashboard/feed/clubs">
                  <button
                    onClick={() => setActiveTab("clubs")}
                    className={`feed-nav-btn ${
                      activeTab === "clubs" ? "active" : ""
                    }`}
                  >
                    <Users className="feed-nav-icon" />
                    <span>Clubs</span>
                  </button>
                </Link>
              </nav>
            </div>

            {/* Right side actions */}
            <div className="feed-header-actions">
              <button className="feed-search-btn">
                <Search className="feed-search-icon" />
              </button>

              <button
                className="feed-post-btn"
                onClick={() => router.push("/dashboard/feed/post")}
              >
                <Plus className="feed-post-icon" />
                <span>Post</span>
              </button>
            </div>
          </div>
        </header>

        <main className="dashboard-content">{children}</main>
        <BottomNav />
      </div>
    </Provider>
  );
}
