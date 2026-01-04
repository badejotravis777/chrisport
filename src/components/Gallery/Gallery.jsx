import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Gallery.module.css";
import { galleryImages } from "../../data/gallery";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className={styles.gallery}>
      {/* HEADER (simple fade, no viewport wait) */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.kicker}>Moments</span>
        <h2>Milestones & Leadership Moments</h2>
        <p>
          Key moments across leadership, youth impact, collaboration, and public engagement.
        </p>
      </motion.div>

      {/* GALLERY — IMMEDIATE RENDER */}
      <div className={styles.masonry}>
        {galleryImages.map((img) => (
          <figure
            key={img.id}
            className={styles.item}
            onClick={() => setActiveImage(img)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setActiveImage(img); }}
          >
            <div className={styles.imageWrap}>
              <img
                src={img.src}
                alt={img.title}
                loading="eager"
                draggable="false"
              />

              {/* OVERLAY: full write-up (title + full description). */}
              <div className={styles.overlay}>
                <h3>{img.title}</h3>
                <p>{img.description}</p>
              </div>
            </div>

            {/* Small caption beneath image for accessibility / quick scan */}
            <figcaption className={styles.figcaption}>
              <span>{img.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* LIGHTBOX (KEEP ANIMATION) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage.src}
              alt={activeImage.title}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <div className={styles.lightboxText}>
              <h3>{activeImage.title}</h3>
              <p>{activeImage.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
