import styles from '../AboutPage.module.css';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>About Us</h1>
                <p className={styles.heroSubtitle}>
                    Welcome to <strong>GreenTech</strong> – your trusted source for the latest trends, news, and insights in the world of technology.
                </p>
            </section>

            {/* Mission Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.sectionText}>
                    At <strong>GreenTech</strong>, our mission is to empower readers with accurate, timely, and engaging technology news. 
                    We bridge the gap between innovation and understanding, keeping you informed about the breakthroughs shaping our world.
                </p>
            </section>

            {/* Our Story Section */}
            <section className={styles.sectionAlt}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p className={styles.sectionText}>
                    Established in 2024, GreenTech started as a passion project by a solo tech enthusiast eager to make a difference. 
                    Today, we are a growing platform reaching thousands of readers worldwide, offering insights into the latest advancements in AI, green energy, cybersecurity, and more.
                </p>
            </section>

            {/* Core Values Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Our Core Values</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Innovation:</strong> We stay ahead by reporting on cutting-edge technologies.
                    </li>
                    <li className={styles.listItem}>
                        <strong>Transparency:</strong> We value honest, unbiased reporting to keep you informed.
                    </li>
                    <li className={styles.listItem}>
                        <strong>Sustainability:</strong> We highlight green technology solutions that make a difference.
                    </li>
                </ul>
            </section>

            {/* Call-to-Action Section */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Join the GreenTech Community</h2>
                <p className={styles.ctaText}>
                    Stay ahead in the tech world. Subscribe to our newsletter and follow us on social media for daily updates and in-depth articles.
                </p>
                <button className={styles.ctaButton}>Subscribe Now</button>
            </section>
        </div>
    );
}
