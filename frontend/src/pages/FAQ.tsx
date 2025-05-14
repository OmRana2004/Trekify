// src/pages/FAQ.tsx
const FAQ = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">What is included in the trek?</h3>
            <p className="text-gray-600">All trek packages include accommodation, food, and a guide.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How do I book a trek?</h3>
            <p className="text-gray-600">
              You can book a trek directly on our website by clicking the "Book Now" button on each trek or package.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Are there any age restrictions?</h3>
            <p className="text-gray-600">We recommend treks for individuals aged 18-50. However, some treks may have different age requirements.</p>
          </div>
  
          {/* Add more FAQs */}
        </div>
      </div>
    );
  };
  
  export default FAQ;
  