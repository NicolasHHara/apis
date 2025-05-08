let countriesData = [];

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        countriesData = data;
        displayCountries(data);
    })
    .catch(error => {
        console.error('Erro ao buscar países:', error);
    });

function displayCountries(countries) {
    const container = document.getElementById('countries-container');
    container.innerHTML = '';
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <img src="${country.flags.svg}" alt="Bandeira de ${country.name.common}">
            <h2>${country.name.common}</h2>
            <p>🌍 ${country.region}</p>
        `;
        container.appendChild(card);
    });
}

document.getElementById('search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCountries = countriesData.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm)
    );
    displayCountries(filteredCountries);
});
