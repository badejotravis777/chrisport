import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Christian is a visionary leader with an unwavering commitment to excellence. As Founder & Lead Strategist at Novalith Marketing, he drives initiatives with tangible results. His passion for community impact and youth development is remarkable.",
    name: "Lillian Onofiok",
    role:
      "Project, Programs & Operations Manager — Building Systems For Lasting Legacies | Top 100 Africa Future Leader 2025",
  },
  {
    quote:
      "Christian’s leadership, creativity, and dedication to youth engagement are unmatched. He consistently delivers high-impact initiatives that unite communities and inspire meaningful participation.",
    name: "Ridwan Oyenuga",
    role:
      "CEO, Timingotech & SereniMind | Harvard ALP Fellow | AU Youth Leader | UN WFF Youth Representative",
  },
  {
    quote:
      "Christian is a mentor and strategic thinker who brings complex visions to life with integrity and clarity. His expertise in branding and digital strategy consistently drives real results.",
    name: "Ayah Bonny",
    role: "Accounting & Finance Professional | ICAN in Progress",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className={styles.kicker}>Credibility</span>
        <h2>Trusted by Leaders & Collaborators</h2>
        <p>
          Perspectives from professionals, founders, and community leaders who
          have worked closely with me across different initiatives.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <motion.article
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.18,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className={styles.quoteIcon}>“</div>

            <p className={styles.quote}>{item.quote}</p>

            <footer className={styles.footer}>
              <div className={styles.avatar}>
                {item.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
