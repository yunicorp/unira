"use client";

import React from "react";
import Link from "next/link";
import { Home, Search, MessageSquare, User } from "lucide-react";
import "./style.css";

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <Link href="/dashboard/feed" className="bottom-nav-item">
        <Home className="bottom-nav-icon" />
        {/* <span>Home</span> */}
      </Link>

      <Link href="/dashboard/search" className="bottom-nav-item">
        <Search className="bottom-nav-icon" />
        {/* <span>Search</span> */}
      </Link>

      <Link href="/dashboard/messages" className="bottom-nav-item">
        <MessageSquare className="bottom-nav-icon" />
        {/* <span>Messages</span> */}
      </Link>

      <Link href="/dashboard/profile" className="bottom-nav-item">
        <User className="bottom-nav-icon" />
      </Link>
    </nav>
  );
};

export default BottomNav;
