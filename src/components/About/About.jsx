import { motion } from "framer-motion";
import styles from "./About.module.css";
import profileImg from "../../assets/images/img7.png"; // 👈 adjust name if needed

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.wrapper}>
        {/* IMAGE SIDE */}
        <motion.div
  className={styles.imageWrap}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className={styles.imageStack}>
    <span className={styles.accentBox} />
    <div className={styles.imageFrame}>
      <img src={profileImg} alt="Christian portrait" />
    </div>
    <span className={styles.tag}>Founder • Strategist</span>
  </div>
</motion.div>


        {/* TEXT SIDE */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className={styles.kicker}>Who I Am</span>
          <h2>Building Systems, Not Just Brands</h2>

          <p>
            I’m a Nigerian entrepreneur, marketing strategist, and youth advocate
            focused on building scalable brands, communities, and initiatives
            that create measurable impact across Africa.
          </p>

          <p>
            Through <strong>Novalith Marketing</strong> and{" "}
            <strong>Stratos HQ</strong>, I help organizations grow through digital
            storytelling, strategic positioning, and product innovation.
          </p>

          <p>
            Beyond business, I lead <strong>The Glorylight Initiative</strong>{" "}
            and <strong>Glorylight Football Academy</strong> — investing in youth
            leadership, community development, and long-term social value.
          </p>

          <div className={styles.focus}>
            <span>Focus Areas</span>
            <ul>
              <li>Brand Strategy & Growth</li>
              <li>Digital Products & Platforms</li>
              <li>Youth Empowerment Programs</li>
              <li>Community-Led Initiatives</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
