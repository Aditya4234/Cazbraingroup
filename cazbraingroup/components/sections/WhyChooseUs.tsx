"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

const features = [
    "Affordable Costing",
    "On Time Delivery",
    "Experienced Team",
    "Support Management",
    "Trusted Relationship",
    "Premium Quality"
];

export function WhyChooseUs() {
    return (
        <section className="section">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Why Choose CazBrainGroup?</h2>
                        <p className={styles.description}>
                            We combine innovation, technology, and expertise to deliver exceptional results.
                            Our client-centric approach ensures your vision is realized with precision.
                        </p>

                        <div className={styles.grid}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.item}>
                                    <CheckCircle2 className={styles.icon} size={24} />
                                    <span className={styles.text}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <Image
                            src="/image/image 3.png"
                            alt="Why Choose CazBrainGroup"
                            width={600}
                            height={500}
                            className={styles.image}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
