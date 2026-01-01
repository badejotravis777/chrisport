import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className={styles.kicker}>Get In Touch</span>

        <h2>Let’s Build Something Meaningful</h2>

        <p className={styles.description}>
          Whether it’s collaboration, consulting, speaking, or building
          impactful initiatives — I’m always open to meaningful conversations.
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:christianchidubemedwardngwu@gmail.com"
            className={styles.primary}
          >
            christianchidubemedwardngwu@gmail.com
          </a>

          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/thechristian.en?igsh=bzZvbXl4Mzh3Nzdu&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/christianedward-ngwu"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
