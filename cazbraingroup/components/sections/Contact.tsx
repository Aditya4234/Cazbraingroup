"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import styles from "./Contact.module.css";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
            setErrorMsg("Something went wrong. Please try again later.");
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

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className={styles.input}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className={styles.input}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                required
                                className={styles.textarea}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell us about your project..."
                                rows={4}
                            />
                        </div>

                        {status === "success" && (
                            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-md">
                                <CheckCircle2 size={20} />
                                <span>Message sent successfully! We'll get back to you soon.</span>
                            </div>
                        )}
                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-md">
                                <AlertCircle size={20} />
                                <span>{errorMsg}</span>
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : (
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
