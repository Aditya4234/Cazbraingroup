"use client";

import Link from "next/link";
import styles from "./Clients.module.css";

const clients = [
    "Microsoft", "Google", "BBC", "ITV", "Zinc", "Fantasy"
];

export function Clients() {
    return (
        <section className={styles.section}>
            <div className="container">
                <p className={styles.label}>Trusted by leading companies worldwide</p>
                <div className={styles.grid}>
                    {clients.map((client, index) => (
                        <Link key={index} href="/company" className={styles.logoWrapper}>
                            <span className={styles.logoText}>{client}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
