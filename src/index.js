const DEBOUNCE_DELAY = 300;

const url = 'https://api.thecatapi.com/v1/breeds';
const api_key = 'live_ rL1rfTKwj1wzaPBfJud1XRGIVbf9lh WRl0GvKXgkPaN2nEu7CcMDmQ3nTm15 TKiF';
let storedBreeds = [];

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data = data.filter((breed) => breed.image?.url != null);

        storedBreeds = data;

        const breedSelector = document.getElementById('breed_selector');

        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            if (!breed.image) continue;

            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = breed.name;
            breedSelector.appendChild(option);
        }

        breedSelector.addEventListener('change', handleBreedChange);
        showBreedImage(0);
    })
    .catch(function (error) {
        console.log(error);
    });

function handleBreedChange(event) {
    const breedIndex = event.target.value;
    showBreedImage(breedIndex);
}

function showBreedImage(index) {
    const breed = storedBreeds[index];
    document.getElementById('breed_image').src = breed.image.url;
    document.getElementById('breed_json').textContent = breed.temperament;
    document.getElementById('wiki_link').href = breed.wikipedia_url;
    document.getElementById('wiki_link').textContent = 'Ссылка';
}