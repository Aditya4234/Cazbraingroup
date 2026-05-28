"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        text: "CazBrainGroup transformed our vision into a reality. Their team is highly skilled, professional, and dedicated to delivering excellence.",
        author: "Sarah Johnson",
        role: "CEO, TechStart",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        text: "The mobile app they developed for us has significantly improved our customer engagement. Highly recommend their services!",
        author: "Michael Chen",
        role: "Director, RetailCo",
        image: "https://i.pravatar.cc/150?u=michael"
    },
    {
        text: "Exceptional quality and timely delivery. They truly understand the needs of modern businesses.",
        author: "Emily Davis",
        role: "Founder, CreativeAgency",
        image: "https://i.pravatar.cc/150?u=emily"
    }
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="section bg-muted/30">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className={styles.heading}>What Our Clients Say</h2>
                </div>

                <div className={styles.carousel}>
                    <button onClick={prev} className={styles.navBtn} aria-label="Previous testimonial">
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.cardWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className={styles.card}
                            >
                                <Quote className={styles.quoteIcon} size={40} />
                                <p className={styles.text}>{testimonials[current].text}</p>
                                <div className={styles.author}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].author}
                                        className={styles.avatar}
                                    />
                                    <div>
                                        <h4 className={styles.name}>{testimonials[current].author}</h4>
                                        <span className={styles.role}>{testimonials[current].role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button onClick={next} className={styles.navBtn} aria-label="Next testimonial">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`${styles.dot} ${index === current ? styles.activeDot : ""}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
