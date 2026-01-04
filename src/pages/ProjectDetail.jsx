import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProjectDetail.module.css";
import { projects } from "../data/projects";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className={styles.notFound}>Project not found.</div>;
  }

  return (
    <motion.main
      className={styles.page}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.06 } } }}
    >
      <motion.div variants={fadeUp} className={styles.topRow}>
        <Link to="/" className={styles.back}>
          ← Back
        </Link>

        <div className={styles.badges}>
          {project.status && <span className={styles.badge}>{project.status}</span>}
          <span className={styles.badgeLight}>{project.category}</span>
        </div>
      </motion.div>

      <section className={styles.hero}>
        <motion.div variants={fadeUp} className={styles.heroText}>
          <h1 className={styles.title}>{project.title}</h1>

          <p className={styles.subtitle}>
            <strong>{project.role}</strong>
            <span className={styles.dot}>·</span>
            <span className={styles.emph}>{project.category}</span>
          </p>

          {project.overview && <p className={styles.lead}>{project.overview}</p>}

          <div className={styles.actions}>
            <Link to="/" className={`${styles.btn} ${styles.btnGhost}`}>
              Back to home
            </Link>

            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Visit {project.title} →
              </a>
            )}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.heroImageWrap}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={styles.heroImage}
              loading="lazy"
            />
          ) : null}
        </motion.div>
      </section>

      <section className={styles.body}>
        {/* The Problem */}
        {project.problem && (
          <motion.article variants={fadeUp} className={styles.section}>
            <h3>The Problem</h3>
            <p>{project.problem}</p>
          </motion.article>
        )}

        {/* Responsibilities + Outcomes in two-column layout */}
        <motion.div variants={fadeUp} className={styles.twoCol}>
          {project.responsibilities && (
            <div className={styles.col}>
              <h4>My Role & Responsibilities</h4>
              <ul>
                {project.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && (
            <div className={styles.col}>
              <h4>Key Work & Outcomes</h4>
              <ul>
                {project.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Current focus / Vision / Next */}
        {project.vision && (
          <motion.article variants={fadeUp} className={styles.section}>
            <h4>The Vision</h4>
            <p>{project.vision}</p>
          </motion.article>
        )}

        {project.currentFocus && (
          <motion.article variants={fadeUp} className={styles.section}>
            <h4>Current Focus</h4>
            <ul>
              {project.currentFocus.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </motion.article>
        )}

        {project.next && (
          <motion.article variants={fadeUp} className={styles.section}>
            <h4>What’s Next</h4>
            <p>{project.next}</p>
          </motion.article>
        )}
      </section>

      {/* subtle footer CTA */}
      {project.externalLink && (
        <motion.div variants={fadeUp} className={styles.footerCta}>
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimaryLarge}
          >
            Visit {project.title}
          </a>
        </motion.div>
      )}
    </motion.main>
  );
};

export default ProjectDetail;
