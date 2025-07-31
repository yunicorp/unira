// pages/GptSearch.tsx
"use client";

import React, { useState } from "react";
import styles from "./GptSearch.module.css";
import { GoogleGenAI } from "@google/genai";

const GptSearch = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  //   const genAI = new GoogleGenerativeAI(
  //     process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
  //   );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("");
    setLoading(true);

    try {
      const ai = new GoogleGenAI({
        apiKey: "AIzaSyCEzmk05J35sn0ADAjbX3PPTrRjbl2Pqn0",
      });

      async function main() {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents:
            "Act as a content suggestion system so dont give extra reply just give precise reply to this query" +
            query +
            "without any other suggestion",
        });
        // console.log(response.text);
        setAnswer(response.text);
      }

      main();
    } catch (error) {
      setAnswer("Something went wrong. Please try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hey i am your Buddy , ask your doubt</h1>
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
      {answer && (
        <div className={styles.answer}>
          <strong> </strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default GptSearch;
