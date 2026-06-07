"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, PenTool, Code2, Rocket, ShieldCheck } from "lucide-react";
import styles from "./Process.module.css";

const steps = [
    {
        icon: Search,
        title: "Discovery",
        description: "We analyze your requirements and define the project scope.",
        href: "/services"
    },
    {
        icon: PenTool,
        title: "Design",
        description: "We create intuitive UI/UX designs tailored to your brand.",
        href: "/services"
    },
    {
        icon: Code2,
        title: "Development",
        description: "Our experts build robust solutions using cutting-edge tech.",
        href: "/services"
    },
    {
        icon: ShieldCheck,
        title: "QA & Testing",
        description: "Rigorous testing ensures a bug-free and smooth experience.",
        href: "/services"
    },
    {
        icon: Rocket,
        title: "Launch",
        description: "We help you deploy and launch your product to the market.",
        href: "/services"
    }
];

export function Process() {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className={styles.heading}>Our Development Process</h2>
                    <p className={styles.subheading}>
                        A proven workflow that ensures transparency and quality at every step.
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.line}></div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={step.href} className={styles.step}>
                                <div className={styles.iconCircle}>
                                    <step.icon size={24} />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
