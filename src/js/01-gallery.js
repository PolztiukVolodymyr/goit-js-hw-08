// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryImageBox = document.querySelector(".gallery");
const markupImageBox = createImageMarkup(galleryItems);

galleryImageBox.insertAdjacentHTML("beforeend", markupImageBox);
galleryImageBox.addEventListener("click", onImageBoxClick);

function createImageMarkup (items) {
    return items.map((item) =>
  `<div>
    <a class="gallery__link" href="${item.original}">
      <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"/>
    </a>
  </div>`).join("");
     
};

function onImageBoxClick(event) {
  event.preventDefault();
};

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

console.log(galleryItems);
