import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

let myGallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }, idx) =>
      `<a class = "gallery__item" href = "${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}">
  </a>`
  )
  .join("");

myGallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  //   captionPosition: "bottom", //default = "bottom"
  captionDelay: 250,
});

// console.log(lightbox);
