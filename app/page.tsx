"use client";

import Image from "next/image";
import ActionList from "@/_components/action-list";
import styles from "./page.module.css";
import { useState } from "react";

const greetings = [
    // "welcome to a new heaven",
    // "where shadows meet, or not",
    // "the veil parts, meet",
    // "a place found, enter",
    // "prepare for awesome",
    // "enter the fun zone!",
    // "ready to play? Enter",
    // "your quest starts here!",
    // "press start to continue...",
    "here be fun",
    // "you made it to wonderland!",
    // "hello adventurer, this is",
    // "hola amigo! kaise ho?",
    // "fingerlicking delicious",
];

export default function Home() {
    const [randomGreeting] = useState(() => greetings[Math.floor(Math.random() * greetings.length)]);
    // const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    return (
        <main className={styles.main}>
            <section>
                <Image
                    src="/mascot.webp"
                    alt="Cartoon of a happy student"
                    width={190}
                    height={301}
                    className={styles.mascot}
                    priority
                />
                <h2>{randomGreeting}</h2>
                <h1>Unira</h1>
                <p>Step into the world where conversations spark connections!</p>
            </section>

            <section style={{ fontSize: "1.3rem" }}>
                <ActionList
                    actions={[
                        {
                            label: <span>Get Started</span>,
                            href: "/login",
                            primary: true,
                        },
                        {
                            label: <span>explore first!</span>,
                            href: "/explore",
                        },
                    ]}
                />
            </section>
        </main>
    );
}
