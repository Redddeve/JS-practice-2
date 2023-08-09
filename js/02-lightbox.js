import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('ul.gallery');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
gallery.addEventListener('click', onGalleryClick);

function GalleryItemTemplate({ original, preview, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

function createGalleryMarkup(gallery) {
  const markup = gallery.map(GalleryItemTemplate).join('');
  return markup;
}
const imageModal = new SimpleLightbox('ul.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
function onGalleryClick(evt) {
  evt.preventDefault();
}
