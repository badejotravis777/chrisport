import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

import img1 from "../../assets/images/img17.png";
import img2 from "../../assets/images/img18.png";
import img3 from "../../assets/images/img19.png";

const images = [img1, img2, img3];

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  animate: {
    opacity: 0.35,
    scale: 1,
    y: 0,
    transition: {
      duration: 2.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -20,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 9000); // slow, premium timing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      {/* LEFT CONTENT */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className={styles.kicker}>Founder • Strategist • Builder</span>

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
          <a href="#projects" className={styles.primary}>
            View Projects
          </a>

          <a
            href="https://wa.me/2349128430714?text=Hello%20Christian,%20I’d%20like%20to%20work%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Let’s Work Together
          </a>
        </div>
      </motion.div>

      {/* RIGHT AMBIENT IMAGE STACK */}
      <div className={styles.heroImage}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Christian portrait"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
