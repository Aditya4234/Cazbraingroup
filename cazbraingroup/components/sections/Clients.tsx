"use client";

import styles from "./Clients.module.css";

// Placeholder for client logos - using text for now
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
                        <div key={index} className={styles.logoWrapper}>
                            <span className={styles.logoText}>{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
