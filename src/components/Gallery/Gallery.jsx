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
        <h2>Highlights & Achievements</h2>
        <p>
          A visual record of leadership, community impact, collaboration, and
          growth across different initiatives.
        </p>
      </motion.div>

      {/* GALLERY — IMMEDIATE RENDER */}
      <div className={styles.masonry}>
        {galleryImages.map((img) => (
          <figure
            key={img.id}
            className={styles.item}
            onClick={() => setActiveImage(img)}
          >
            <div className={styles.imageWrap}>
              <img
                src={img.src}
                alt={img.caption}
                loading="eager"
              />
            </div>

            <figcaption>
              <span>{img.caption}</span>
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
              alt={activeImage.caption}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
            />
            <p>{activeImage.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
