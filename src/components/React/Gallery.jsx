// src/components/React/Gallery.jsx
import React, { useState } from 'react';
import ModalGallery from './ModalGallery';

function Gallery({ imagens, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagens.length);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative">
      {/* Exibe uma única imagem grande */}
      <div className="w-full h-96 flex items-center justify-center">
        <img
          src={imagens[currentIndex]}
          alt={title}
          className="object-cover w-full h-full cursor-pointer rounded-lg"
          onClick={openModal}
        />
      </div>
      {/* Botões de navegação */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
      {/* Modal com a galeria completa */}
      {modalOpen && (
        <ModalGallery
          imagens={imagens}
          initialIndex={currentIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Gallery;
