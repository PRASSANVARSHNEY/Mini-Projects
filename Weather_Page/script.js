function fetchAPI(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=N5JR243APX8QUZR3B787QMJEJ`;

    fetch(url)
        .then(res => res.json())
        .then(renderUI)
        .catch(err => console.error('Error fetching data:', err));
}

const locationBox = document.getElementById('location-box');
const locationName = document.getElementById('location');
const dateTime = document.getElementById('date');
const temp = document.getElementById('temperature');
const description = document.getElementById('description');
const tempImg = document.getElementById('temp-icon');

function renderUI(data) {
    const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

    locationName.textContent = data.address;
    dateTime.textContent = data.days[0].datetime;
    temp.textContent = `${Math.round(fahrenheitToCelsius(data.days[0].temp))}°C`;
    description.textContent = data.days[0].description;
    tempImg.src = data.days[0].icon;
}

const searchButton = document.getElementById('search');
searchButton.addEventListener('click', () => {
    const location = locationBox.value.trim();
    if (location) {
        fetchAPI(location);
    } else {
        console.error('Please enter a location.');
    }
});

// Initial call to fetchAPI if needed
// fetchAPI('DefaultLocation');
