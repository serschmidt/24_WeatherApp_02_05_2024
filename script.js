//      https://openweathermap.org/

const API_KEY = "5bbad6486ea33c642146f45fcd041e1d";
const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

let weatherData;

getWeatherButton.onclick = () => {
  const cityName = locationInput.value.trim();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((weather) => {
      console.log(weather);
      displayWeather(weather);
    });

  locationInput.value = "";
};

function displayWeather({
  name,
  main: { temp },
  weather: [{ description, icon }],
  wind: { speed: speedOfWind },
  sys: { sunrise, sunset },
}) {
  const sunriseTime = new Date(sunrise * 1000); //  Timestamp * 1000 => in Sekunden
  const sunsetTime = new Date(sunset * 1000); //  Timestamp * 1000 => in Sekunden
  console.log(sunriseTime);
  weatherContainer.innerHTML = `
        <div>
          <h2>${name}</h2>
          <img src="https://openweathermap.org/img/wn/${icon}.png" alt="icon" />
        </div>
        <div>
          <p>Temperatur: ${temp} °C</p>
          <p>Description: ${description}</p>
          <p>speed of Wind: ${speedOfWind} m/s</p>
          <p>Sunrise: ${sunriseTime.getHours()}:${sunriseTime.getMinutes()}:${sunriseTime.getSeconds()} </p>
          <p>Sunset: ${sunsetTime.getHours()}:${sunsetTime.getMinutes()}:${sunsetTime.getSeconds()}</p>
        </div>
      `;
}

//  Objekt weiterleitung, aber ineffizient. Besser ist die Destrukturierung.
// function displayWeather(weather) {
//     weatherContainer.innerHTML = `
//         <h2>${weather.name}</h2>
//         <p>Temperatur: ${weather.main.temp} °C</p>
//         <p>Description: ${weather.weather[0].description}</p>
//         <p>speed of Wind: ${weather.wind.speed} m/s</p>
//         <p>Ico:
//         <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="icon">
//         </p>

//     `;
// }

// function getLocation() {
//     city = locationInput.value.trim();
//   console.log(city);

//   weather = async () => {
//       await fetchWeather();
//   }
//   updateWeatherOutput();
//   console.log(weather);
// }

// getWeatherButton.onclick = getLocation;

// async function fetchWeather() {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//     );
//     const weather = await response.json();
//     console.log(weather);
//     return weather;
//   } catch (error) {
//     console.log(error);
//   }
// }

// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}

// function updateWeatherOutput() {
//   weatherContainer.innerHTML = `
//     <p>The Weather for ${weather.name} is shown below: </p>
//     <pP
//     `;
// }
// <p>The temperature is ${weather.main.temp} ° C </p>

/*    Objekt weather: Daten mit Schlüsseln:
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,    //  Unix Timestamp
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}
*/
