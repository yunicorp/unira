"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Image as ImageIcon, X, Send, Hash } from "lucide-react";
import Button from "@/_components/button";
import SimpleButton from "@/_components/simple-button";
import styles from "./page.module.css";

export default function CreatePost() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [caption, setCaption] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                // 5MB limit
                alert("Image size must be less than 5MB");
                return;
            }

            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = e => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && tagInput.trim()) {
            e.preventDefault();
            const newTag = tagInput.trim();
            if (!tags.includes(newTag) && tags.length < 5) {
                setTags([...tags, newTag]);
            }
            setTagInput("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!caption.trim() && !selectedImage) {
            alert("Please add a caption or image to create a post");
            return;
        }

        setIsSubmitting(true);

        try {
            // Here you would typically upload the image and create the post
            // For now, we'll just simulate the process
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Redirect back to dashboard
            router.push("/dashboard");
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <SimpleButton onClick={() => router.back()} className={styles.backButton}>
                        <ArrowLeft className={styles.backIcon} />
                        Back
                    </SimpleButton>
                    <h1 className={styles.title}>Create Post</h1>
                    <div></div> {/* Spacer for flexbox */}
                </div>
            </header>

            <main className={styles.main}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.postCard}>
                        <div className={styles.userInfo}>
                            <div className={styles.avatar}>
                                <div className={styles.avatarPlaceholder}>U</div>
                            </div>
                            <div className={styles.userDetails}>
                                <span className={styles.username}>You</span>
                                <span className={styles.visibility}>Public post</span>
                            </div>
                        </div>

                        <div className={styles.content}>
                            <textarea
                                className={styles.captionInput}
                                placeholder="What's on your mind?"
                                value={caption}
                                onChange={e => setCaption(e.target.value)}
                                rows={4}
                                maxLength={500}
                            />

                            <div className={styles.characterCount}>{caption.length}/500</div>

                            {imagePreview && (
                                <div className={styles.imagePreview}>
                                    <button type="button" onClick={removeImage} className={styles.removeImageButton}>
                                        <X className={styles.removeIcon} />
                                    </button>
                                    <img src={imagePreview} alt="Preview" className={styles.previewImage} />
                                </div>
                            )}

                            {tags.length > 0 && (
                                <div className={styles.tagsContainer}>
                                    {tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>
                                            #{tag}
                                            <button
                                                type="button"
                                                onClick={() => removeTag(tag)}
                                                className={styles.removeTagButton}
                                            >
                                                <X className={styles.removeTagIcon} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className={styles.tagInputContainer}>
                                <Hash className={styles.hashIcon} />
                                <input
                                    type="text"
                                    placeholder="Add tags (press Enter to add)"
                                    value={tagInput}
                                    onChange={e => setTagInput(e.target.value)}
                                    onKeyDown={addTag}
                                    className={styles.tagInput}
                                    maxLength={20}
                                />
                                <span className={styles.tagLimit}>{tags.length}/5</span>
                            </div>

                            <div className={styles.actions}>
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className={styles.attachButton}
                                >
                                    <ImageIcon className={styles.attachIcon} />
                                    Add Photo
                                </button>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                    className={styles.hiddenInput}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.submitSection}>
                        <Button
                            type="submit"
                            width="fill"
                            disabled={isSubmitting || (!caption.trim() && !selectedImage)}
                            className={styles.submitButton}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className={styles.spinner}></div>
                                    Posting...
                                </>
                            ) : (
                                <>
                                    <Send className={styles.submitIcon} />
                                    Share Post
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
