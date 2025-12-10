import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images
        .map(
            ({ webformatURL, largeImageURL, tags }) => `
        <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}"
        <img class = "gallery-image" src=${webFormatURL} alt="${tags}" />
        </a>
        </li>
        `
        )
        .join("");
    
    galleryContainer.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}
export function clearGallery() {
    galleryContainer.innerHTML = "";
}
export function showLoader() {
    galleryContainer.classList.add("loading");
}
export function hideLoader() {
    galleryContainer.classList.remove("loading")
}