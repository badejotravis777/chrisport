import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Gallery.module.css";
import { galleryImages } from "../../data/gallery";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className={styles.gallery}>
      {/* HEADER */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className={styles.kicker}>Moments</span>
        <h2>Highlights & Achievements</h2>
        <p>
          A visual record of leadership, community impact, collaboration, and
          growth across different initiatives.
        </p>
      </motion.div>

      {/* GALLERY */}
      <div className={styles.masonry}>
        {galleryImages.map((img, index) => (
          <motion.figure
            key={img.id}
            className={styles.item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.7 }}
            viewport={{ once: true }}
            onClick={() => setActiveImage(img)}
          >
            <div className={styles.imageWrap}>
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
              />
            </div>

            <figcaption>
              <span>{img.caption}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* LIGHTBOX */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <p>{activeImage.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
