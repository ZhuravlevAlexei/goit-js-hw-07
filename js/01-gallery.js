import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

let myGallery = document.querySelector(".gallery");
let instanceBlb = "";

function onEscape(evt) {
  if (!basicLightbox.visible()) {
    document.removeEventListener("keydown", onEscape);
    return;
  }
  if (evt.code === "Escape") {
    //console.log(instanceBlb);
    if (basicLightbox.visible()) {
      instanceBlb.close();
      //console.log("closed!!!!");
      document.removeEventListener("keydown", onEscape);
      return;
    }
  }
  // console.log(evt);
}

function showModalWindow(myLink) {
  instanceBlb = basicLightbox.create(
    `<img width="1400" height="900" src="${myLink}"></img>`
  );
  //console.log(instanceBlb);
  instanceBlb.show();
  document.addEventListener("keydown", onEscape);
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
