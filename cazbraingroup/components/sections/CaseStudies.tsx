"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
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
                    {caseStudies.map((project, index) => (
                        <Link key={index} href={`/work/${project.slug}`} className={styles.card}>
                            <div className={styles.content}>
                                <span className="text-sm text-[var(--primary)] font-medium">{project.industry}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <span className={styles.readMore}>
                                    Read Case Study <ArrowRight size={16} />
                                </span>
                            </div>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={400}
                                    className={styles.caseImage}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
