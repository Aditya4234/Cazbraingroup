"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./CaseStudies.module.css";

export function CaseStudies() {
    return (
        <section className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        What Apps, Websites, and Software Projects Has CazBrainGroup Delivered?
                    </h2>
                    <p className={styles.subheading}>
                        CazBrainGroup has delivered 450+ projects across web, mobile, and software.
                    </p>
                </div>

                <div className={styles.showcase}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h3 className={styles.projectTitle}>LabelXChange (B2B Fashion Marketplace)</h3>
                            <p className={styles.projectDesc}>
                                CazBrainGroup developed a custom iOS app for LabelXChange, a B2B fashion marketplace, that reduced product search time by 35%, enabled secure transactions, and increased buyer engagement.
                            </p>
                            <button className={styles.readMore}>
                                Read Case Study <ArrowRight size={16} />
                            </button>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <Image
                                src="/image/image2.png"
                                alt="LabelXChange Case Study"
                                width={500}
                                height={400}
                                className={styles.caseImage}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
