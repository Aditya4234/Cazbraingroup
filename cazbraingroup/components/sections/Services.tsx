"use client";

import { Smartphone, Globe, Gamepad2, Glasses, Monitor, Code } from "lucide-react";
import styles from "./Services.module.css";

const services = [
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps tailored to your business needs."
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Scalable and responsive web applications using modern frameworks."
    },
    {
        icon: Gamepad2,
        title: "Game Development",
        description: "Immersive 2D and 3D games for mobile, PC, and consoles."
    },
    {
        icon: Glasses,
        title: "AR/VR Solutions",
        description: "Cutting-edge Augmented and Virtual Reality experiences."
    },
    {
        icon: Monitor,
        title: "Enterprise Solutions",
        description: "Robust software solutions to streamline your business operations."
    },
    {
        icon: Code,
        title: "Startup MVP",
        description: "Quick and efficient MVP development to validate your ideas."
    }
];

export function Services() {
    return (
        <section className="section bg-muted/30">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className={styles.heading}>Our Expertise</h2>
                    <p className={styles.subheading}>
                        We deliver comprehensive digital solutions to help your business grow.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <service.icon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
