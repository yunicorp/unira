"use client";

import React, { useState } from "react";
import "./style.css";

interface SettingsState {
  allowAnonymousQuestions: boolean;
  hideReplies: boolean;
  letPeopleAskQuestions: boolean;
  allowSubmissionsWithMedia: boolean;
  showTopPosts: boolean;
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    allowAnonymousQuestions: false,
    hideReplies: false,
    letPeopleAskQuestions: true,
    allowSubmissionsWithMedia: true,
    showTopPosts: false,
  });

  const handleToggle = (setting: keyof SettingsState) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  const handleReset = () => {
    setSettings({
      allowAnonymousQuestions: false,
      hideReplies: false,
      letPeopleAskQuestions: true,
      allowSubmissionsWithMedia: true,
      showTopPosts: false,
    });
  };

  return (
    <div className="settings-container">
      <div className="settings-content">
        <h1 className="settings-title">Settings</h1>

        <div className="settings-section">
          <div className="setting-item">
            <span className="setting-label">Account settings</span>
          </div>

          <div className="setting-item">
            <span className="setting-label">Privacy</span>
          </div>

          <div className="setting-item">
            <span className="setting-label">Drafts</span>
          </div>

          <div className="setting-item">
            <span className="setting-label">Mail</span>
          </div>

          <div className="setting-item">
            <span className="setting-label">Visibility</span>
          </div>

          <div className="setting-item">
            <span className="setting-label">Blocked student</span>
          </div>
        </div>

        <div className="settings-section">
          <div className="setting-item-toggle">
            <div className="setting-text">
              <span className="setting-label">Allow anonymous questions</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.allowAnonymousQuestions}
                onChange={() => handleToggle("allowAnonymousQuestions")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item-toggle">
            <div className="setting-text">
              <span className="setting-label">Hide replies</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.hideReplies}
                onChange={() => handleToggle("hideReplies")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item-toggle">
            <div className="setting-text">
              <span className="setting-label">Let people ask questions</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.letPeopleAskQuestions}
                onChange={() => handleToggle("letPeopleAskQuestions")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item-toggle">
            <div className="setting-text">
              <span className="setting-label">
                Allow submissions with media
              </span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.allowSubmissionsWithMedia}
                onChange={() => handleToggle("allowSubmissionsWithMedia")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item-toggle">
            <div className="setting-text">
              <span className="setting-label">Show top posts</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.showTopPosts}
                onChange={() => handleToggle("showTopPosts")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn-secondary" onClick={handleReset}>
            Reset to Default
          </button>
          <button className="btn-primary" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
