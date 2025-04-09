// src/components/React/ModalGallery.jsx
import React, { useState } from 'react';

function ModalGallery({ imagens, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagens.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative">
        <img
          src={imagens[currentIndex]}
          alt="Imagem em destaque"
          className="max-w-full max-h-screen rounded-lg"
        />
        <button
          onClick={showPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 px-3 py-1 rounded-r"
        >
          &#10094;
        </button>
        <button
          onClick={showNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 px-3 py-1 rounded-l"
        >
          &#10095;
        </button>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 bg-red-500 text-white px-2 py-1 rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default ModalGallery;
