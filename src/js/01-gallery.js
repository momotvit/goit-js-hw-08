// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

  
////adding items to html element



const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);


//////// simpleLightbox hook up


let lightbox = new SimpleLightbox('.gallery a', {
    captions: 'true',  
    captionsData: 'alt',
    captionDelay: 250,
    captionAnimation: 'fade',
    captionAnimationSpeed: 500,
});