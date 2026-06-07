"use client";

import Link from "next/link";
import { Smartphone, Globe, Gamepad2, Glasses, Monitor, Code } from "lucide-react";
import { services as servicesData } from "@/data/services";
import styles from "./Services.module.css";

const iconMap: Record<string, React.ElementType> = {
    Smartphone, Globe, Gamepad2, Glasses, Monitor, Code,
};

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
                    {servicesData.map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <Link key={service.id} href={`/services/${service.id}`} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    {Icon && <Icon size={32} />}
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
