"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import styles from "./Insights.module.css";

export function Insights() {
    const articles = blogPosts.slice(0, 3);

    return (
        <section className="section">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.imageColumn}>
                        <div className={styles.illustration}>
                            <Image
                                src="/image/image4.png"
                                alt="Software Development"
                                width={400}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                    </div>

                    <div className={styles.contentColumn}>
                        <h2 className={styles.categoryTitle}>Latest Insights</h2>
                        <div className={styles.list}>
                            {articles.map((article, index) => (
                                <Link key={index} href={`/blog/${article.slug}`} className={styles.item}>
                                    <div className={styles.bullet}></div>
                                    <div className="flex-1">
                                        <h3 className={styles.articleTitle}>{article.title}</h3>
                                        <span className="text-sm text-muted-foreground">{article.category} · {article.readTime}</span>
                                    </div>
                                    <ArrowRight size={16} className="text-muted-foreground shrink-0" />
                                </Link>
                            ))}
                        </div>
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--primary)] font-medium mt-6 hover:underline">
                            View All Articles <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
