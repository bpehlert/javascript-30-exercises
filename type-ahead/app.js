const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchField = document.querySelector('.search');
const ul = document.querySelector('.suggestions');

const locations = [];

(function fetchLocations() {
    fetch(URL)
        .then(res => res.json())
        .then(json => locations.push(...json))
}());

function filterLocations(textToFind, locations) {
    return locations.filter(location => {
        const regex = new RegExp(textToFind, "gi")
        return location.city.match(regex) || location.state.match(regex);
    });    
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function displayList() {
    const filteredLocations = filterLocations(this.value, locations);
    const html = filteredLocations.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="name">${numberWithCommas(place.population)}</span>
            </li>
        `
    }).join('');
    ul.innerHTML = html;
}

searchField.addEventListener("keyup", displayList);