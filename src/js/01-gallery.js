import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const htmlForGallery = galleryItems
  .map(
    photo =>
      `<a class="gallery__item" href="${photo.original}">
      <img class="gallery__image" src="${photo.preview}" alt="${photo.description}" />
</a>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', htmlForGallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
