// pages/GptSearch.tsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "./GptSearch.module.css";
import { GoogleGenAI } from "@google/genai";

const GptSearch = () => {
  const [query, setQuery] = useState("");
  const [fullAnswer, setFullAnswer] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTypedAnswer("");
    setFullAnswer("");
    setLoading(true);

    try {
      const ai = new GoogleGenAI({
        apiKey: "AIzaSyCEzmk05J35sn0ADAjbX3PPTrRjbl2Pqn0",
      });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents:
          "Act as a content suggestion system so don't give extra reply, just give precise reply to this query: " +
          query +
          " without any other suggestion.",
      });

      // Save full answer to start typing animation
      console.log(response.text);

      setFullAnswer(response.text);
    } catch (error) {
      setFullAnswer("Something went wrong. Please try again.");
      console.error(error);
    }

    setLoading(false);
  };

  // Typewriter effect
  useEffect(() => {
    if (!fullAnswer) return;

    let index = 0;
    const interval = setInterval(() => {
      setTypedAnswer((prev) => prev + fullAnswer.charAt(index));
      index++;

      if (index >= fullAnswer.length) {
        clearInterval(interval);
      }
    }, 25); // Typing speed (ms)

    return () => clearInterval(interval);
  }, [fullAnswer]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hey, I am your Buddy. Ask your doubt!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
          placeholder="Type your question..."
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Loading..." : "Ask"}
        </button>
      </form>

      {typedAnswer && (
        <div className={styles.answer}>
          {/* <strong>Answer:</strong> */}
          <p>{typedAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default GptSearch;
