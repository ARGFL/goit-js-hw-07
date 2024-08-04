import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Selectăm containerul galeriei
const galleryContainer = document.querySelector('.gallery');

// Crearea markup-ului galeriei
const createGalleryMarkup = (items) => {
  return items
    .map((item) => {
      const { preview, original, description } = item;
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
    })
    .join('');
};

// Randarea galeriei
const renderGallery = () => {
  galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
};

renderGallery();

let instance = null; // Declarația variabilei instanță la nivel global

// Gestionarea clicurilor în galerie
function onGalleryClick(e) {
  e.preventDefault();
  // Verificăm dacă elementul pe care s-a făcut clic este o imagine din galerie
  const isGalleryImg = e.target.classList.contains('gallery__image');
  if (!isGalleryImg) return;

  // Obținem sursa imaginii originale
  const imgSource = e.target.dataset.source;

  // Cream o instanță basicLightbox cu imaginea originală
  instance = basicLightbox.create(`
    <img src="${imgSource}" width="800" height="600" />
  `);

  instance.show();

  // Adăugăm ascultător pentru evenimentul de apăsare a tastei Escape
  document.addEventListener('keydown', onEscKeyPress);
}

// Funcția pentru gestionarea închiderii cu tasta Escape
function onEscKeyPress(e) {
  if (e.key === 'Escape' && instance) {
    instance.close();
    instance = null; // Resetăm instanța după închidere
    document.removeEventListener('keydown', onEscKeyPress); // Eliminăm ascultătorul
  }
}

// Adăugăm un listener de eveniment pentru clicuri pe containerul galeriei
galleryContainer.addEventListener('click', onGalleryClick);