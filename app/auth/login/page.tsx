"use client";

import "@material-design-icons/font/outlined.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "@/_components/button";
import SimpleButton from "@/_components/simple-button";
import TextInput from "@/_components/text-input";
import styles from "./page.module.css";

export default function Login() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const [email, setEmail] = useState(searchParams.get("email") ?? "");

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) throw new Error(data.error);

                // Redirect to dashboard
                router.push("/dashboard");
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
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.fields}>
                        <TextInput
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <div>
                            <TextInput
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                autoFocus
                            />
                            <SimpleButton className={styles.forgotPassword}>Forgot password?</SimpleButton>
                        </div>
                        {error && (
                            <p className={styles.error}>
                                <span className="material-icons-outlined">error</span>
                                {error}
                            </p>
                        )}
                    </div>
                    <Button type="submit" width="fill">
                        Login
                    </Button>
                </form>
            </main>
        </div>
    );
}
