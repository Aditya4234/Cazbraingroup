"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/components/ui/Toast";
import styles from "./Contact.module.css";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            toast("Message sent successfully! We'll get back to you soon.", "success");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } catch {
            toast("Something went wrong. Please try again later.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.heading}>Let's Build Something Amazing Together</h2>
                        <p className={styles.description}>
                            Ready to start your project? Contact us today for a free consultation and quote.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>30min</span>
                                <span className={styles.statLabel}>Free Consultation</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>24h</span>
                                <span className={styles.statLabel}>Response Time</span>
                            </div>
                        </div>
                        <div className={styles.emailRow}>
                            <span className={styles.emailLabel}>Email:</span>
                            <a href="mailto:adityagupta200807@gmail.com" className={styles.emailValue}>
                                adityagupta200807@gmail.com
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form} noValidate>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name *</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value });
                                    if (errors.name) setErrors({ ...errors, name: "" });
                                }}
                                placeholder="John Doe"
                            />
                            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email *</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message *</label>
                            <textarea
                                id="message"
                                required
                                className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value });
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                placeholder="Tell us about your project..."
                                rows={4}
                            />
                            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                <>
                                    Send Message <Send size={18} className="ml-2" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
