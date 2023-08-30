// Create a list of cities with their corresponding names and IDs.
// Implement a function that randomly selects a city from the list.
// Make an asynchronous API call to fetch the temperature data for the selected city from a weather API of your choice.
// Extract the temperature value from the retrieved data.
// Display the city name and its temperature value to the user.


const axios = require('axios');

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

async function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

async function fetchTemperature(city) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;

    try {
        const response = await axios.get(apiUrl);
        const temperature = response.data.current_weather.temperature_2m;
        return temperature;
    } catch (error) {
        console.error('Error fetching temperature:', error);
        throw error;
    }
}

async function main() {
    const randomCity = await selectRandomCity(cities);
    console.log('Random City:', randomCity.name);

    try {
        const temperature = await fetchTemperature(randomCity);
        console.log(`Temperature in ${randomCity.name}: ${temperature}°C`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
