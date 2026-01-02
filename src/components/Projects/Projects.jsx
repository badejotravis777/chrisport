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
      link: "https://www.novalithmarketing.com.ng",
    },
    {
      title: "Stratos HQ",
      role: "Founder",
      description:
        "An innovation and media hub empowering creatives and startups with strategy, technology, and execution support.",
      image: stratosImg,
      link: "https://www.stratoshqapp.com",
    },
    {
      title: "The Glorylight Initiative",
      role: "Founder",
      description:
        "A community-focused initiative dedicated to feeding the hungry, restoring hope, and driving grassroots impact.",
      image: glorylightImg,
      link: "https://www.glorylightfc.com.ng",
    },
    {
      title: "Glorylight Football Academy",
      role: "Founder",
      description:
        "A youth football academy focused on discipline, leadership development, and talent nurturing through sports.",
      image: academyImg,
      link: "https://www.glorylightfc.com.ng",
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

      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.kicker}>Ventures</span>
        <h2>Projects & Impact</h2>
        <p className={styles.belief}>
  These ventures reflect my belief that real impact is built through systems,
  not moments.
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
         {/* IMAGE (CLICKABLE) */}
         <a
           href={project.link}
           target="_blank"
           rel="noopener noreferrer"
           className={styles.image}
         >
           <img src={project.image} alt={project.title} />
           <div className={styles.overlay} />
         </a>
       
         {/* CONTENT */}
         <div className={styles.content}>
           <span className={styles.role}>{project.role}</span>
       
           {/* TITLE (CLICKABLE) */}
           <h3>
             <a
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
             >
               {project.title}
             </a>
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
