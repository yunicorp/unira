import React from "react";
import "./style.css";

interface Message {
  id: number;
  sender: string;
  message: string;
  timeAgo: string;
  avatar: string;
  isRead?: boolean;
}

const Inbox: React.FC = () => {
  const messages: Message[] = [
    {
      id: 1,
      sender: "jayshree",
      message: "Are you coming to 5A this weekend?",
      timeAgo: "25 minutes ago",
      avatar: "/avatars/jayshree.jpg",
    },
    {
      id: 2,
      sender: "SPN submitted",
      message: "Howe you seven. Period worry? how send heart?",
      timeAgo: "1 hour ago",
      avatar: "/avatars/spn.jpg",
    },
    {
      id: 3,
      sender: "You",
      message:
        "You did sent over your medical notes! They should have arrived, so let me kn...",
      timeAgo: "Thursday, March 10th",
      avatar: "/avatars/you.jpg",
    },
    {
      id: 4,
      sender: "sleepyawesome",
      message: "Yeah I can catch up. It's been a while.",
      timeAgo: "3/8/23",
      avatar: "/avatars/sleepy.jpg",
    },
    {
      id: 5,
      sender: "errourobstacy",
      message: "I miss you, let me know when we'll meet up!",
      timeAgo: "2/8/23",
      avatar: "/avatars/error.jpg",
    },
    {
      id: 6,
      sender: "errourobstacy",
      message:
        "You won't believe who I ran into while grocery shopping! I nee...",
      timeAgo: "2/8/23",
      avatar: "/avatars/error2.jpg",
    },
  ];

  return (
    <div className="inbox-container">
      <div className="inbox-header">
        <h1 className="inbox-title">Inbox</h1>
        <p className="inbox-date">Today, April 23rd</p>
      </div>

      <div className="messages-list">
        {messages.map((message) => (
          <div key={message.id} className="message-item">
            <div className="message-avatar">
              <img
                src="https://styles.redditmedia.com/t5_5kzsg2/styles/communityIcon_enxbot399r5f1.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=05ccf3fce58bea1aad9dcfaf599a8ccc03b7aa3c"
                alt={message.sender}
              />
            </div>
            <div className="message-content">
              <div className="message-header">
                <span className="sender-name">{message.sender}</span>
                <span className="message-time">{message.timeAgo}</span>
              </div>
              <p className="message-text">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
