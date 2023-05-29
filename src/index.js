import './css/styles.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function showLoader() {
    loader.style.display = 'block';
}

    function hideLoader() {
    loader.style.display = 'none';
    }

    function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
    }

    function hideError() {
    error.style.display = 'none';
    }

    function showCatInfo(cat) {
    const img = document.createElement('img');
    img.src = cat.url;
    img.alt = cat.breeds[0].name;
    catInfo.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = cat.breeds[0].name;
    catInfo.appendChild(name);

    const description = document.createElement('p');
    description.textContent = cat.breeds[0].description;
    catInfo.appendChild(description);

    const temperament = document.createElement('p');
    temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
    catInfo.appendChild(temperament);

    catInfo.style.display = 'block';
    }

    function clearCatInfo() {
    catInfo.innerHTML = '';
    catInfo.style.display = 'none';
    }

    async function handleBreedSelect(event) {
    const breedId = event.target.value;

    try {
        clearCatInfo();
        showLoader();

        const cat = await fetchCatByBreed(breedId);
        showCatInfo(cat);

        hideLoader();
    } catch (error) {
        showError(error.message);
        hideLoader();
    }
}
    try {
        showLoader();

        const breeds = await fetchBreeds();

        breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
        });

        hideLoader();
    } catch (error) {
        showError(error.message);
        hideLoader();
    }
breedSelect.addEventListener('change', handleBreedSelect);
document.addEventListener('DOMContentLoaded', init);