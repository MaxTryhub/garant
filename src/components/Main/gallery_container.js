import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./gallery_container.css";

const photos = [
  {
    original: "./img/gallery-1.JPG",
    thumbnail: "./img/gallery-1.JPG",
  },
  {
    original: "./img/services_battery.jpg",
    thumbnail: "./img/services_battery.jpg",
  },
  {
    original: "./img/services-4.jpg",
    thumbnail: "./img/services-4.jpg",
  },
  {
    original: "./img/services-5.jpg",
    thumbnail: "./img/services-5.jpg",
  },
  {
    original: "./img/gallery-2.JPG",
    thumbnail: "./img/gallery-2.JPG",
  },
  {
    original: "./img/gallery-3.JPG",
    thumbnail: "./img/gallery-3.JPG",
  },
  {
    original: "./img/gallery-4.JPG",
    thumbnail: "./img/gallery-4.JPG",
  },
  {
    original: "./img/gallery-5.JPG",
    thumbnail: "./img/gallery-5.JPG",
  },
  {
    original: "./img/gallery-6.JPG",
    thumbnail: "./img/gallery-6.JPG",
  },
  {
    original: "./img/gallery-7.JPG",
    thumbnail: "./img/gallery-7.JPG",
  },
];

const GalleryContainer = () => (
  <div className="gallery_container ">
    <h1 className="gallery_container-title">Галерея</h1>
    <ImageGallery
      items={photos}
      autoPlay={true}
      showPlayButton={false}
      showFullscreenButton={true}
    />
  </div>
);

export default GalleryContainer;
