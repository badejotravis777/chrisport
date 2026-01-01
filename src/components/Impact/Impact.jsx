import { motion } from "framer-motion";
import styles from "./Impact.module.css";

const stats = [
  {
    value: "70+",
    label: "Young professionals trained through leadership & media programs",
  },
  {
    value: "4+",
    label: "Organizations founded across marketing, youth & community sectors",
  },
  {
    value: "10+",
    label: "Community outreach & youth empowerment projects executed",
  },
  {
    value: "Global",
    label: "Youth advocacy reach across digital & physical platforms",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Impact = () => {
  return (
    <section className={styles.impact}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.kicker}>Impact</span>
          <h2>Measured in People, Not Just Numbers</h2>
          <p>
            My work is defined by outcomes — lives empowered, communities
            strengthened, and systems built for long-term transformation.
          </p>
        </motion.header>

        <motion.div
          className={styles.stats}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((itemData, index) => (
            <motion.div
              key={index}
              className={styles.stat}
              variants={item}
              whileHover={{ y: -6 }}
            >
              <div className={styles.value}>{itemData.value}</div>
              <p>{itemData.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
