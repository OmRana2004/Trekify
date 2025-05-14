import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form data submission via FormSubmit
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ranaom2025@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        // Show the thank you message on successful submission
        setSubmitted(true);
        form.reset(); // Reset the form after submission
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("There was an error submitting your message. Please try again.");
      });
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-14">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Trekify Pvt. Ltd.
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>
                  📍 <strong>Address:</strong> P.O.Box 249135, Dhrali, Harshil,
                  Uttarakhand
                </li>
                <li>
                  📞 <strong>Phone:</strong> +91 76687 62035
                </li>
                <li>
                  📱 <strong>WhatsApp:</strong> 76687 62035 (Keshav Singh Panwar)
                </li>
                <li>
                  ✉️ <strong>Email:</strong> info@Trekify.com
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <iframe
                title="Dharali Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.1234567890123!2d78.7972018!3d31.040698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908c1234567890ab%3A0x1234567890abcdef!2sDharali%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1612345678901"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form or Thank You Message */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            {submitted ? (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold text-green-600">
                  ✅ Thank You!
                </h2>
                <p className="text-gray-700">
                  Your message has been sent successfully. We’ll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-green-600 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Hidden Inputs for FormSubmit */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="Full Name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    />
                  </div>

                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  />

                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  />

                  <textarea
                    name="Message"
                    placeholder="Your Message"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 hover:scale-[1.02] transition-all duration-300 w-full"
                  >
                    ✉️ Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
