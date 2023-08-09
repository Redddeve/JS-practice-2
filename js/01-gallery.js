import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const imageModal = basicLightbox.create(
  `
    <img src="">
`
);

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
gallery.addEventListener('click', onGalleryClick);

function GalleryItemTemplate({ original, preview, description }) {
  return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}

function createGalleryMarkup(gallery) {
  const markup = gallery.map(GalleryItemTemplate).join('');
  return markup;
}

/* ========================================================== */

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target !== evt.currentTarget) {
    const imageModal = basicLightbox.create(
      `<img src="${evt.target.dataset.source}">`
    );
    imageModal.show(() => document.addEventListener('keydown', onModalKeyDown));

    function onModalKeyDown(evt) {
      if (evt.key !== 'Escape') return;
      hideModal();
    }
    function hideModal() {
      imageModal.close(() =>
        document.removeEventListener('keydown', onModalKeyDown)
      );
    }
  }
}
