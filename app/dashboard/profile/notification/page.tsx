"use client";

import React, { useState, useEffect, useRef } from "react";
import "./style.css";

interface Notification {
  id: number;
  message: string;
  time: string;
  read: boolean;
  type: "post" | "reply" | "club" | "message";
  sender?: string;
}

const NotificationBell: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNotifications = () => {
      const currentTime = new Date().toISOString();
      const sampleNotifications: Notification[] = [
        {
          id: 1,
          message:
            "New message from John: Hey, do you have notes from today's lecture?",
          time: "Just now",
          read: false,
          type: "message",
          sender: "John Doe",
        },
        {
          id: 2,
          message: "Sarah commented on your post about the Programming Contest",
          time: "5m ago",
          read: false,
          type: "reply",
          sender: "Sarah Smith",
        },
        {
          id: 3,
          message: "New announcement in Tech Club: Upcoming Hackathon",
          time: "10m ago",
          read: false,
          type: "club",
        },
        {
          id: 4,
          message:
            "Direct message from Professor Williams regarding your project",
          time: "15m ago",
          read: false,
          type: "message",
          sender: "Prof. Williams",
        },
      ];

      setNotifications(sampleNotifications);
      setUnreadCount(sampleNotifications.filter((n) => !n.read).length);
    };

    fetchNotifications();

    // Set up polling to check for new notifications every 30 seconds
    const intervalId = setInterval(fetchNotifications, 30000);

    return () => clearInterval(intervalId);
  }, []);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotificationClick = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
    setUnreadCount(0);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "club":
        return "🎭";
      case "reply":
        return "💬";
      case "post":
        return "📝";
      case "message":
        return "✉️";
      default:
        return "🔔";
    }
  };

  return (
    <div className="notification-container" ref={notificationRef}>
      <div className="notification-bell" onClick={handleNotificationClick}>
        <span className="bell-icon">🔔</span>
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </div>

      <div className="notification-dropdown">
        lkdsfjhlad
        <div className="notification-header">
          <h3>Notifications</h3>
          {unreadCount > 0 && (
            <button className="mark-all-read" onClick={markAllAsRead}>
              Mark all as read
            </button>
          )}
        </div>
        {notifications.length > 0 ? (
          <div className="notification-list">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${
                  !notification.read ? "unread" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <span className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </span>
                <div className="notification-content">
                  <p className="notification-message">{notification.message}</p>
                  <div className="notification-info">
                    {notification.sender && (
                      <span className="notification-sender">
                        {notification.sender}
                      </span>
                    )}
                    <span className="notification-time">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-notifications">No notifications</p>
        )}
      </div>
    </div>
  );
};

export default NotificationBell;
