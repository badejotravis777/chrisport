import { motion } from "framer-motion";
import styles from "./Projects.module.css";

// ✅ IMPORT IMAGES PROPERLY
import novalithImg from "../../assets/images/novalith.png";
import stratosImg from "../../assets/images/stratos.png";
import glorylightImg from "../../assets/images/glorylight.png";
import academyImg from "../../assets/images/academy.png";

const projects = [
  {
    title: "Novalith Marketing",
    role: "Founder & Lead Strategist",
    description:
      "A growth-focused marketing firm helping brands scale through digital storytelling, performance marketing, and strategic brand positioning.",
    image: novalithImg,
  },
  {
    title: "Stratos HQ",
    role: "Co-Founder",
    description:
      "An innovation and media hub empowering creatives and startups with strategy, technology, and execution support.",
    image: stratosImg,
  },
  {
    title: "The Glorylight Initiative",
    role: "Founder",
    description:
      "A community-focused initiative dedicated to feeding the hungry, restoring hope, and driving grassroots impact.",
    image: glorylightImg,
  },
  {
    title: "Glorylight Football Academy",
    role: "Founder",
    description:
      "A youth football academy focused on discipline, leadership development, and talent nurturing through sports.",
    image: academyImg,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section className={styles.projects}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.kicker}>Ventures</span>
        <h2>Projects & Impact</h2>
        <p>
          Organizations and initiatives I’ve founded, scaled, and led across
          marketing, innovation, youth development, and community building.
        </p>
      </motion.header>

      <motion.div
        className={styles.list}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className={styles.project}
            variants={item}
          >
            {/* IMAGE */}
            <div className={styles.image}>
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay} />
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
              <span className={styles.role}>{project.role}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
