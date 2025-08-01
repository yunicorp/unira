"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Eye, EyeOff, ArrowLeft, Check } from "lucide-react";
import Button from "@/_components/button";
import SimpleButton from "@/_components/simple-button";
import styles from "./page.module.css";

type RegistrationStep = "email" | "otp" | "password" | "success";

export default function Register() {
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState<RegistrationStep>("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            // Simulate sending OTP
            await new Promise(resolve => setTimeout(resolve, 1500));
            setCurrentStep("otp");
        } catch (error) {
            setError("Failed to send verification code. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            // Simulate OTP verification
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (otp !== "123456") {
                throw new Error("Invalid OTP");
            }
            setCurrentStep("password");
        } catch (error) {
            setError("Invalid verification code. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        setIsLoading(true);

        try {
            // Simulate account creation
            await new Promise(resolve => setTimeout(resolve, 1500));
            setCurrentStep("success");

            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                router.push("/dashboard");
            }, 2000);
        } catch (error) {
            setError("Failed to create account. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const resendOtp = async () => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Reset OTP input
            setOtp("");
            setError("");
        } catch (error) {
            setError("Failed to resend code. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const renderEmailStep = () => (
        <form onSubmit={handleEmailSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                    Email Address
                </label>
                <div className={styles.inputWrapper}>
                    <Mail className={styles.inputIcon} />
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your email address"
                        required
                    />
                </div>
            </div>

            <Button type="submit" width="fill" disabled={isLoading || !email.trim()} className={styles.submitButton}>
                {isLoading ? "Sending..." : "Send Verification Code"}
            </Button>
        </form>
    );

    const renderOtpStep = () => (
        <form onSubmit={handleOtpSubmit} className={styles.form}>
            <div className={styles.otpInfo}>
                <p className={styles.otpDescription}>We've sent a 6-digit verification code to</p>
                <p className={styles.emailDisplay}>{email}</p>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="otp" className={styles.label}>
                    Verification Code
                </label>
                <input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={e => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className={`${styles.input} ${styles.otpInput}`}
                    placeholder="Enter 6-digit code"
                    maxLength={6}
                    required
                />
            </div>

            <Button type="submit" width="fill" disabled={isLoading || otp.length !== 6} className={styles.submitButton}>
                {isLoading ? "Verifying..." : "Verify Code"}
            </Button>

            <div className={styles.resendSection}>
                <span className={styles.resendText}>Didn't receive the code?</span>
                <button type="button" onClick={resendOtp} className={styles.resendButton} disabled={isLoading}>
                    Resend Code
                </button>
            </div>
        </form>
    );

    const renderPasswordStep = () => (
        <form onSubmit={handlePasswordSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                    Create Password
                </label>
                <div className={styles.inputWrapper}>
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your password"
                        required
                        minLength={8}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.eyeButton}>
                        {showPassword ? <EyeOff className={styles.eyeIcon} /> : <Eye className={styles.eyeIcon} />}
                    </button>
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                    Confirm Password
                </label>
                <div className={styles.inputWrapper}>
                    <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className={styles.input}
                        placeholder="Confirm your password"
                        required
                        minLength={8}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className={styles.eyeButton}
                    >
                        {showConfirmPassword ? (
                            <EyeOff className={styles.eyeIcon} />
                        ) : (
                            <Eye className={styles.eyeIcon} />
                        )}
                    </button>
                </div>
            </div>

            <div className={styles.passwordRequirements}>
                <p className={styles.requirementsTitle}>Password must contain:</p>
                <ul className={styles.requirementsList}>
                    <li className={password.length >= 8 ? styles.requirementMet : ""}>At least 8 characters</li>
                    <li className={/[A-Z]/.test(password) ? styles.requirementMet : ""}>One uppercase letter</li>
                    <li className={/[a-z]/.test(password) ? styles.requirementMet : ""}>One lowercase letter</li>
                    <li className={/\d/.test(password) ? styles.requirementMet : ""}>One number</li>
                </ul>
            </div>

            <Button
                type="submit"
                width="fill"
                disabled={isLoading || !password || !confirmPassword || password !== confirmPassword}
                className={styles.submitButton}
            >
                {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
        </form>
    );

    const renderSuccessStep = () => (
        <div className={styles.successContainer}>
            <div className={styles.successIcon}>
                <Check className={styles.checkIcon} />
            </div>
            <h2 className={styles.successTitle}>Account Created!</h2>
            <p className={styles.successMessage}>
                Your account has been successfully created. You'll be redirected to your dashboard shortly.
            </p>
        </div>
    );

    const getStepTitle = () => {
        switch (currentStep) {
            case "email":
                return "Create Account";
            case "otp":
                return "Verify Email";
            case "password":
                return "Set Password";
            case "success":
                return "Welcome!";
            default:
                return "Create Account";
        }
    };

    const canGoBack = currentStep === "otp" || currentStep === "password";

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <header className={styles.header}>
                    {canGoBack && (
                        <SimpleButton
                            onClick={() => {
                                if (currentStep === "otp") setCurrentStep("email");
                                if (currentStep === "password") setCurrentStep("otp");
                            }}
                            className={styles.backButton}
                        >
                            <ArrowLeft className={styles.backIcon} />
                        </SimpleButton>
                    )}
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>{getStepTitle()}</h1>
                        <p className={styles.subtitle}>
                            {currentStep === "email" && "Enter your email to get started"}
                            {currentStep === "otp" && "Check your email for the verification code"}
                            {currentStep === "password" && "Create a secure password for your account"}
                            {currentStep === "success" && "Welcome to our platform"}
                        </p>
                    </div>
                </header>

                <main className={styles.main}>
                    {error && (
                        <div className={styles.errorContainer}>
                            <p className={styles.errorMessage}>{error}</p>
                        </div>
                    )}

                    {currentStep === "email" && renderEmailStep()}
                    {currentStep === "otp" && renderOtpStep()}
                    {currentStep === "password" && renderPasswordStep()}
                    {currentStep === "success" && renderSuccessStep()}
                </main>

                {currentStep !== "success" && (
                    <footer className={styles.footer}>
                        <p className={styles.footerText}>
                            Already have an account?{" "}
                            <button onClick={() => router.push("/auth/login")} className={styles.footerLink}>
                                Sign in
                            </button>
                        </p>
                    </footer>
                )}
            </div>
        </div>
    );
}
