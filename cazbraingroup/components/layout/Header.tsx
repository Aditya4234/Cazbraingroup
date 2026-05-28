"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./Header.module.css";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Technology", href: "/technology" },
    { name: "Work", href: "/work" },
    { name: "Company", href: "/company" },
    { name: "Blog", href: "/blog" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                styles.header,
                isScrolled ? styles.scrolled : ""
            )}
        >
            <div className="container">
                <div className={styles.navWrapper}>
                    <Link href="/" className={styles.logo}>
                        {/* Placeholder for Logo - using text for now */}
                        <span className="font-bold text-2xl">CazBrainGroup</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className={styles.navLink}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary">
                            Get a Quote
                        </Link>

                        <button
                            className={styles.mobileToggle}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={cn(styles.mobileNav, isMobileMenuOpen ? styles.open : "")}>
                <div className="container">
                    <nav className={styles.mobileNavLinks}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
