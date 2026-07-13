import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark } from 'react-icons/fa6';
import SectionHeading from '../components/SectionHeading';
import { galleryImages } from '../data/content';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="bg-[#f7f5ef] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the field and beyond."
          description="A glimpse into the landscapes, operations, and partnerships that define our work."
          centered
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image + index}
              type="button"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              className="overflow-hidden rounded-[1.5rem] shadow-lg"
            >
              <img src={image} alt="Agricultural scene" loading="lazy" className="h-64 w-full object-cover transition duration-500 hover:scale-110" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-6 py-10 backdrop-blur"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative max-w-5xl overflow-hidden rounded-[2rem]"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage} alt="Selected gallery view" className="max-h-[80vh] w-full object-contain" />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg"
              >
                <FaXmark />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
