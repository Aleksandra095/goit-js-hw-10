    export async function fetchBreeds() {
        try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
            headers: {'x-api-key': 'live_ rL1rfTKwj1wzaPBfJud1XRGIVbf9lh WRl0GvKXgkPaN2nEu7CcMDmQ3nTm15 TKiF' }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch breeds');
        }
    
        const breeds = await response.json();
        return breeds;
        } catch (error) {
        throw new Error(`Failed to fetch breeds: ${error.message}`);
        }
    }
    
    export async function fetchCatByBreed(breedId) {
        try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
            headers: {
            'x-api-key': 'live_ rL1rfTKwj1wzaPBfJud1XRGIVbf9lh WRl0GvKXgkPaN2nEu7CcMDmQ3nTm15 TKiF'
            }
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch cat');
        }
    
        const cats = await response.json();
        return cats[0];
        } catch (error) {
        throw new Error(`Failed to fetch cat: ${error.message}`);
        }
    }