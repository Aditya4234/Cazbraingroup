"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={styles.title}>
                            Custom Software & <span className={styles.highlight}>Mobile Application</span> Development
                        </h1>
                        <p className={styles.subtitle}>
                            We offer premium range of mobile app development and web development services, that make things better for all type of business.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Link href="/contact" className="btn btn-primary">
                                Let's Talk
                            </Link>
                            <Link href="/work" className={styles.secondaryBtn}>
                                View Our Work
                            </Link>
                        </div>

                        <div className={styles.stats}>
                            <Link href="/company" className={styles.statItem}>
                                <span className={styles.statNumber}>100+</span>
                                <span className={styles.statLabel}>Projects Delivered</span>
                            </Link>
                            <Link href="/company" className={styles.statItem}>
                                <span className={styles.statNumber}>50+</span>
                                <span className={styles.statLabel}>Experts</span>
                            </Link>
                            <Link href="/company" className={styles.statItem}>
                                <span className={styles.statNumber}>98%</span>
                                <span className={styles.statLabel}>Client Retention</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href="/work">
                            <Image
                                src="/image/image.png"
                                alt="CazBrainGroup Hero"
                                width={600}
                                height={500}
                                className={styles.heroImage}
                                priority
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
