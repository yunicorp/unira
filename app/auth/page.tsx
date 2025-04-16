"use client";

import "@material-design-icons/font/outlined.css";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "@/_components/button";
import SimpleButton from "@/_components/simple-button";
import TextInput from "@/_components/text-input";
import styles from "./page.module.css";

export default function Auth() {
    const searchParams = useSearchParams();
    const [email, setEmail] = useState(searchParams.get("email") || "");

    return (
        <div className={styles.app}>
            <nav className={styles.nav}>
                <SimpleButton onClick={() => window.history.back()}>
                    <span className="material-icons-outlined">chevron_left</span>
                    Back
                </SimpleButton>
            </nav>
            <main className={styles.main}>
                <h1>Login or Register</h1>
                <form>
                    <TextInput
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoFocus
                    />
                    <Button type="submit" width="fill">
                        Continue
                    </Button>
                </form>
            </main>
        </div>
    );
}
