import React from "react";
import { motion } from "framer-motion";
import nehru from "../assets/certificates/Nehru-Institute-of-Mountaineering-Logo-1-e1685940713654.webp";
import imf from "../assets/certificates/imf.jpg";
import UttarakhandLogo from "../assets/certificates/Uttarakhand-logo.jpg";

const certifications = [nehru, imf, UttarakhandLogo];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CertificationsSection: React.FC = () => {
  return (
    <section className="bg-gray-200 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold mb-6 text-gray-900 tracking-wide"
        >
          Certifications & Accreditations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-gray-600 mb-12 text-lg leading-relaxed"
        >
          We are recognized and certified by top tourism and safety organizations to ensure your trust and confidence.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certifications.map((src, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="
                w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 
                bg-white border border-gray-200 rounded-full 
                flex items-center justify-center shadow-md
                hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer
              "
              aria-label={`Certification ${i + 1}`}
              tabIndex={0}
              role="img"
            >
              <img
                src={src}
                alt={`certificate ${i + 1}`}
                loading="lazy"
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 object-contain rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
