import "./ImageGallery.scss";

import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Selected Image"
            className="modal-content"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
