// Importăm array-ul de obiecte cu detalii despre imaginile galeriei
import { galleryItems } from './gallery-items.js';

// Selectăm containerul HTML unde va fi afișată galeria
const galleryContainer = document.querySelector('.gallery');

// Funcție pentru a crea markup-ul galeriei din datele furnizate
const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      // Pentru fiecare obiect de imagine, returnăm un șir HTML pentru a crea elementele de galerie
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`;
    })
    // Combinăm toate elementele într-un singur șir HTML
    .join('');
};

// Funcție pentru a randa (afișa) galeria în DOM
const renderGallery = () => {
  // Setăm markup-ul galeriei creat ca innerHTML al containerului galeriei
  galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
};

// Apelăm funcția pentru a randa galeria pe pagină
renderGallery();

// Inițializăm SimpleLightbox pe link-urile din galerie
// Selectăm toate link-urile din galerie ('.gallery a')
// captionsData: 'alt' - utilizează atributul 'alt' al imaginii ca legendă
// captionDelay: 250 - întârziere de 250ms pentru afișarea legendei
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
console.log(galleryItems);
