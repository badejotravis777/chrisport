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
          impactful initiatives, I’m always open to meaningful conversations.
        </p>

        <div className={styles.actions}>
          {/* PRIMARY CTA */}
          <a
            href="https://wa.me/2349128430714?text=Hello%20Christian,%20I’d%20like%20to%20start%20a%20conversation."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            Start a Conversation
          </a>

          {/* EMAIL (SUBTLE) */}
          <span className={styles.email}>
            or email me at{" "}
            <a href="mailto:christianchidubemedwardngwu@gmail.com">
              christianchidubemedwardngwu@gmail.com
            </a>
          </span>

          {/* SOCIALS */}
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/thechristian.en"
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
