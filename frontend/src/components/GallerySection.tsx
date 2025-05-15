import { useState, useEffect } from "react";
import gallery1 from "../assets/gallery/1.jpg";
import gallery2 from "../assets/gallery/2.jpg";
import gallery3 from "../assets/gallery/3.jpg";
import gallery4 from "../assets/gallery/4.jpg";
import gallery5 from "../assets/gallery/5.jpg";
import gallery6 from "../assets/gallery/6.jpg";
import gallery7 from "../assets/gallery/7.jpg";
import gallery8 from "../assets/gallery/8.jpg";
import gallery9 from "../assets/gallery/9.jpg";
import gallery10 from "../assets/gallery/10.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5,
    gallery6, gallery7, gallery8, gallery9, gallery10
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to check window size
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint

    checkMobile(); // Initial check

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine images to show depending on showAll and screen size
  const defaultCount = isMobile ? 4 : 3;
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, defaultCount);

  // Functions for fullscreen viewer navigation (same as your existing code)
  const goToImage = (index: number) => {
    setAnimating(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setAnimating(false);
    }, 200);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      goToImage((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      goToImage(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-wide">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 perspective-1000">
          {imagesToShow.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(galleryImages.indexOf(img))}
              className="
                group relative w-full h-60 rounded-xl overflow-hidden shadow-lg cursor-pointer
                transform transition-transform duration-300 ease-in-out
                hover:scale-105 hover:brightness-110 hover:shadow-2xl
                "
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="object-cover w-full h-full rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div
                className="
                  absolute inset-0 rounded-xl
                  bg-gradient-to-t from-black/30 to-transparent
                  opacity-0 group-hover:opacity-60 transition-opacity duration-300
                "
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>

      {/* Fullscreen Viewer */}
      {selectedIndex !== null && (
        <div
          className={`
            fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4
            transition-opacity duration-500 ease-in-out
            ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
          `}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-red-400 active:scale-90 transition-transform duration-300"
            onClick={() => {
              setAnimating(true);
              setTimeout(() => setSelectedIndex(null), 200);
            }}
            aria-label="Close fullscreen viewer"
          >
            <X className="w-10 h-10" />
          </button>

          <button
            className="absolute left-6 text-white hover:text-gray-300 active:scale-90 transition-transform duration-300"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <img
            src={galleryImages[selectedIndex]}
            alt={`Fullscreen ${selectedIndex + 1}`}
            className={`
              max-w-full max-h-[90vh] rounded-lg shadow-2xl
              transform transition-transform duration-500 ease-in-out
              ${animating ? "opacity-0 scale-90" : "opacity-100 scale-100"}
            `}
          />

          <button
            className="absolute right-6 text-white hover:text-gray-300 active:scale-90 transition-transform duration-300"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
