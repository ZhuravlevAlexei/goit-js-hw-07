import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

let myGallery = document.querySelector(".gallery");
let instanceBlib = "";

function onEscape(evt) {
  if (evt.code === "Escape") {
    if (basicLightbox.visible()) {
      instanceBlib.close();
    }
  }
  // console.log(evt);
}

function showModalWindow(myLink) {
  instanceBlib = basicLightbox.create(
    `<img width="1400" height="900" src="${myLink}"></img>`,
    {
      onShow: (instanceBlib) => document.addEventListener("keydown", onEscape),
      onClose: (instanceBlib) =>
        document.removeEventListener("keydown", onEscape),
    }
  );
  instanceBlib.show();
}

function galleryOnClick(evt) {
  evt.preventDefault();
  let targetLink = evt.target.dataset.source;
  if (!targetLink) {
    alert("Не знайдено посилання на зображення!");
  } else {
    showModalWindow(targetLink);
  }
  //   console.log(evt.target.dataset.source);
}

myGallery.addEventListener("click", galleryOnClick);

const markup = galleryItems
  .map(
    ({ preview, original, description }, idx) =>
      `<div class = "gallery__item" >
      <a class = "gallery__link" href = "${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source = "${original}"
  alt="${description}">
  </a>
  </div>`
  )
  .join("");

myGallery.insertAdjacentHTML("beforeend", markup);

//console.log(basicLightbox);
