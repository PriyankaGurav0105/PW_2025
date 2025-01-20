import { CERTIFICATES } from "../constants/index.js";
import { motion } from "framer-motion";
import  { useState } from "react";

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupImage, setPopupImage] = useState("");

  const openPopup = (image) => {
    setPopupImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupImage("");
  };

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h2>
      <div>
        {CERTIFICATES.map((certificate, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{certificate.date}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {certificate.title} -{" "}
                <span className="text-sm text-stone-500">
                  {certificate.description}
                </span>
              </h3>
              {certificate.image ? (
                <button
                  onClick={() => openPopup(certificate.image)}
                  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
                >
                  View Image
                </button>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-400 text-gray-700 rounded-lg cursor-not-allowed"
                >
                  No Image Available
                </button>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
            >
              &#10005;
            </button>
            <img
              src={popupImage}
              alt="Certificate"
               className="w-full h-auto rounded-lg max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
