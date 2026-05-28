"use client";

import { FileText } from "lucide-react";
import Image from "next/image";
import styles from "./Insights.module.css";

const articles = [
    "Software Development: Definition, Types, Use Cases, Methodologies, And Process",
    "10 Crucial Roles and Responsibilities In a Software Development Team (+ Best Practices)",
    "KPIs for Software Development That Help Enhance the Development Process"
];

export function Insights() {
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
                        <h2 className={styles.categoryTitle}>Software</h2>
                        <div className={styles.list}>
                            {articles.map((article, index) => (
                                <div key={index} className={styles.item}>
                                    <div className={styles.bullet}></div>
                                    <h3 className={styles.articleTitle}>{article}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
