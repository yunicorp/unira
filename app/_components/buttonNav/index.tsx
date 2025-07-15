"use client";

import React from "react";
import { Home, Search, MessageSquare, User, Link } from "lucide-react";
import "./style.css";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bottom-nav">
      <button
        className={`bottom-nav-item ${activeTab === "home" ? "active" : ""}`}
        onClick={() => onTabChange("home")}
      >
        <Home className="bottom-nav-icon" />
        {/* <span>Home</span> */}
      </button>

      <button
        className={`bottom-nav-item ${activeTab === "search" ? "active" : ""}`}
        onClick={() => onTabChange("search")}
      >
        <Search className="bottom-nav-icon" />
        {/* <span>Search</span> */}
      </button>

      <button
        className={`bottom-nav-item ${
          activeTab === "messages" ? "active" : ""
        }`}
        onClick={() => onTabChange("messages")}
      >
        <MessageSquare className="bottom-nav-icon" />
        {/* <span>Messages</span> */}
      </button>

      <Link
        href="/profile"
        className={`bottom-nav-item ${activeTab === "profile" ? "active" : ""}`}
      >
        <User className="bottom-nav-icon" />
      </Link>
    </nav>
  );
};

export default BottomNav;
