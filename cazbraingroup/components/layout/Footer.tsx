import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo}>
                            CazBrainGroup
                        </Link>
                        <p className={styles.description}>
                            We offer premium range of mobile app development and web development services, that make things better for all type of business.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
                            <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
                            <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.heading}>Services</h4>
                        <ul className={styles.list}>
                            <li><Link href="/services/mobile-app">Mobile App Development</Link></li>
                            <li><Link href="/services/web">Web Development</Link></li>
                            <li><Link href="/services/game">Game Development</Link></li>
                            <li><Link href="/services/ar-vr">AR/VR Solutions</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.heading}>Company</h4>
                        <ul className={styles.list}>
                            <li><Link href="/company">About Us</Link></li>
                            <li><Link href="/work">Our Work</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.heading}>Contact</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <Mail size={18} className={styles.icon} />
                                <span>hello@cazbraingroup.com</span>
                            </li>
                            <li>
                                <Phone size={18} className={styles.icon} />
                                <span>+1 123 456 7890</span>
                            </li>
                            <li>
                                <MapPin size={18} className={styles.icon} />
                                <span>Leeds, United Kingdom</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} CazBrainGroup. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
