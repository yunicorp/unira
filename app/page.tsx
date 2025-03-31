"use client";

import Image from "next/image";
import ActionList from "@/_components/action-list";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.header}>
                <Image
                    className={styles.mascot}
                    src="/mascot.webp"
                    alt="Cartoon of a happy student"
                    width={190}
                    height={301}
                    priority
                />
                <h1>Unira</h1>
                <p>Step into the world where conversations spark connections!</p>
            </section>

            <section className={styles.actions}>
                <ActionList
                    align="center"
                    actions={[
                        {
                            label: "Get Started",
                            href: "/login",
                            primary: true,
                        },
                        {
                            label: "explore first!",
                            href: "/explore",
                        },
                    ]}
                />
            </section>
        </main>
    );
}
