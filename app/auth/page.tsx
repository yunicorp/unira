"use client";

import "@material-design-icons/font/outlined.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "@/_components/button";
import SimpleButton from "@/_components/simple-button";
import TextInput from "@/_components/text-input";
import styles from "./page.module.css";

export default function Auth() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const [email, setEmail] = useState(searchParams.get("email") || "");

    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");

        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get-user-details?email=${encodeURIComponent(email)}`)
            .then(async response => {
                const data = await response.json();

                if (!response.ok) throw new Error(data.error);

                if (data.accountCreated) router.push(`/auth/login?email=${encodeURIComponent(email)}`);
                else router.push(`/auth/register?email=${encodeURIComponent(email)}`);
            })
            .catch(err => {
                setError(err.message ?? "An error occurred");
            });
    };

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
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextInput
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoFocus
                        />
                        {error && (
                            <p className={styles.error}>
                                <span className="material-icons-outlined">error</span>
                                {error}
                            </p>
                        )}
                    </div>
                    <Button type="submit" width="fill">
                        Continue
                    </Button>
                </form>
            </main>
        </div>
    );
}
