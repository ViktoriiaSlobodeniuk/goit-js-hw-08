// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<div><a class="gallery__item" href="${original}"> 
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`
  )
  .join('');
galleryEl.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
