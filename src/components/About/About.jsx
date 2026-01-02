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
          I’m Christian Edward-Ngwu, a Nigerian entrepreneur, brand strategist, consultant, and youth development advocate focused on building scalable systems that drive sustainable growth and real-world impact across Africa.
          </p>

          <p>
            Through <strong>Novalith Marketing</strong> and{" "}
            <strong>Stratos HQ</strong>, I work with founders, startups, and organizations through consulting, strategy, and execution to clarify positioning, strengthen digital presence, and design products and platforms built for long-term relevance.
          </p>

          <p>

My work and advocacy extend into global and continental spaces. I serve as <strong>Editor-in-Chief</strong> and <strong>Lagos State Coordinator of the Youth Creative Conference</strong> under the African Union, and I am a Global Youth Ambassador with <strong>Theirworld</strong>, contributing to conversations and initiatives centered on youth development, education, and opportunity.
          </p>

          <p>
          Beyond commercial and policy-facing work, I lead <strong>The Glorylight Initiative</strong>{" "}
            and <strong>Glorylight Football Academy</strong> investing in youth leadership, community development, and purpose-driven initiatives that create lasting social value.
          </p>

          <p>
          My work sits at the intersection of strategy, culture, and impact, helping ideas move from vision to execution and from execution to scale.
          </p>

          <div className={styles.focus}>
            <span>Focus Areas</span>
            <ul>
              <li>Brand Strategy & Growth</li>
              <li>Consulting &Advisory</li>
              <li>Digital Products & Platforms</li>
              <li>Youth Empowerment &Leadership Programs</li>
              <li>Community-Led Initiatives</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
