"use client";

import { Heart, Truck, GraduationCap, Smartphone, ArrowUpRight } from "lucide-react";
import styles from "./Industries.module.css";

const industries = [
    { icon: Heart, name: "Healthcare" },
    { icon: Smartphone, name: "Fintech" },
    { icon: Truck, name: "Logistics" },
    { icon: GraduationCap, name: "Education" },
];

export function Industries() {
    return (
        <section className="section bg-muted/30">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        What Industries Does CazBrainGroup Serve With App, Web, and Software Development?
                    </h2>
                    <p className={styles.subheading}>
                        CazBrainGroup builds apps, websites, and software for industries including healthcare, fintech, logistics, retail, and education, helping businesses cut costs, improve efficiency, and deliver better customer experiences.
                    </p>
                </div>

                <div className={styles.grid}>
                    {industries.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.arrowWrapper}>
                                <ArrowUpRight size={20} />
                            </div>
                            <div className={styles.iconWrapper}>
                                <item.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
