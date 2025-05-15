// src/components/TestimonialsSection.tsx
import { Quote } from "lucide-react";
import testimonialImg from "../assets/testimonials/trekker1.jpg"; // adjust path as needed

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Trekkers Say</h2>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <Quote className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
          <p className="text-lg italic">
            “Trekify made my first Himalayan trek unforgettable. Great food,
            professional guides, and stunning views!”
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <img
              src={testimonialImg}
              alt="Trekker"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-semibold">Om Rana</h4>
              <p className="text-sm text-gray-500">Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
