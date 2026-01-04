import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

// ✅ IMPORT IMAGES
import novalithImg from "../../assets/images/novalith.png";
import stratosImg from "../../assets/images/stratos.png";
import glorylightImg from "../../assets/images/glorylight.png";
import academyImg from "../../assets/images/academy.png";

const projects = [
  {
    slug: "novalith-marketing",
    title: "Novalith Marketing",
    role: "Founder & Lead Strategist",
    category: "Consulting, Brand Strategy, Growth Marketing",
    description:
      "A growth-focused marketing firm helping brands scale through strategic positioning and performance-driven marketing systems.",
    image: novalithImg,
    externalLink: "https://www.novalithmarketing.com.ng",
  },
  {
    slug: "stratos-hq",
    title: "Stratos HQ",
    role: "Co-Founder",
    status: "In Development",
    category: "Innovation, Media, Startup Support",
    description:
      "An innovation and media hub supporting creatives and startups with strategy, technology, and execution frameworks.",
    image: stratosImg,
    externalLink: null,
  },
  {
    slug: "glorylight-initiative",
    title: "The Glorylight Initiative",
    role: "Founder",
    category: "Community Development, Social Impact",
    description:
      "A community-focused initiative dedicated to feeding the hungry and driving grassroots impact.",
    image: glorylightImg,
    externalLink: "https://www.glorylightfc.com.ng",
  },
  {
    slug: "glorylight-football-academy",
    title: "Glorylight Football Academy",
    role: "Founder",
    category: "Youth Development, Sports Leadership",
    description:
      "A youth football academy focused on discipline, leadership, and talent development through sports.",
    image: academyImg,
    externalLink: "https://www.glorylightfc.com.ng",
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
    <section id="projects" className={styles.projects}>
      {/* HEADER */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.kicker}>Ventures</span>
        <h2>Projects & Impact</h2>
        <p className={styles.belief}>
          These ventures reflect my belief that real impact is built through
          systems, not moments.
        </p>
      </motion.header>

      {/* PROJECT LIST */}
      <motion.div
        className={styles.list}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            className={styles.project}
            variants={item}
          >
            {/* IMAGE → INTERNAL PAGE */}
            <Link
              to={`/projects/${project.slug}`}
              className={styles.image}
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay} />
            </Link>

            {/* CONTENT */}
            <div className={styles.content}>
              <span className={styles.role}>{project.role}</span>

              {/* TITLE → INTERNAL PAGE */}
              <h3>
                <Link to={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>

              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
