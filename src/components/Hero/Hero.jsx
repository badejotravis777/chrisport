import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* background effects */}
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className={styles.kicker}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Founder • Strategist • Builder
        </motion.span>

        <h1>
          Building <span>Impactful Brands</span>
          <br />
          Empowering the <span>Youth Economy</span>
        </h1>

        <p>
          I design, build, and scale digital products, communities, and
          initiatives that create measurable, real-world impact across Africa.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>View Projects</button>
          <button className={styles.secondary}>Let’s Work Together</button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span />
      </motion.div>
    </section>
  );
};

export default Hero;
