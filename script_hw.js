//      https://openweathermap.org/

// declaration of constants for the website:
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "5bbad6486ea33c642146f45fcd041e1d";
const API_UNITS = "metric"; //  standard, metric and imperial units

//  reading the input for location:
const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");

//  getting a function  on Button click.
getWeatherButton.onclick = () => {
  console.log("I was clicked!");
  const locationName = locationInput.value.trim();
  console.log(locationName);

  fetch(`${API_URL}q=${locationName}&appid=${API_KEY}&units=${API_UNITS}`)
    .then((response) => response.json())
    .then((data) => displayWeather(data));

  locationInput.value = "";
};

//  building an output:
const weatherContainer = document.getElementById("weatherContainer");
function displayWeather(weather) {
  weatherContainer.textContent = ``;
  const div1 = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = `Your City is: ${weather.name}`;
  const button1 = document.createElement("button");
  button1.id = "buttonLocation";
  button1.textContent = "Details of Location:";
  button1.onclick = () => detailedLocation(weather);
  h2.appendChild(button1);

  const p2 = document.createElement("p");
  p2.textContent = `Temperatur: ${weather.main.temp}`;
  const button2 = document.createElement("button");
  button2.id = "buttonWeather";
  button2.textContent = "Details of Weather:";
  button2.onclick = () => detailedWether(weather);
  p2.appendChild(button2);

  const p3 = document.createElement("p");
  p3.textContent = `Description: ${weather.weather[0].description}`;
  const button3 = document.createElement("button");
  button3.id = "buttonDescription";
  button3.textContent = "Details of Weather:";
  button3.onclick = () => detailedDescription(weather);
  p3.appendChild(button3);



  const p4 = document.createElement("p");
  p4.textContent = `speed of Wind: ${weather.wind.speed} m/s`;

  img = document.createElement("img");
  img.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  div1.appendChild(h2);
  div1.appendChild(p2);
  div1.appendChild(p3);
  div1.appendChild(p4);

  div1.appendChild(img);

  weatherContainer.appendChild(div1);
}

function detailedLocation(weather) {
  const div2 = document.createElement("div");
  div2.innerHTML = `
    <p>The City ${weather.name} in the country: ${weather.sys.country} </p>
    <p>Coordinates: ${weather.coord.lon} and ${weather.coord.lat}</p>
    `;
  weatherContainer.appendChild(div2);
}

function detailedWether(weather) {
  const div2 = document.createElement("div");
  div2.innerHTML = `
    <p>temperature is  ${weather.main.temp} </p>
    <p>the max temperature is: ${weather.main.temp_max} and the min temperature is: ${weather.main.temp_min}</p>
    <p>the pressure is: ${weather.main.pressure} </p>
    <p>the humidity is: ${weather.main.humidity} </p>
    `;
  weatherContainer.appendChild(div2);

}
function detailedDescription(weather) {
  const div2 = document.createElement("div");
  div2.innerHTML = `
    <p>temperature is  ${weather.main.temp} </p>
    <p>the weather is: ${weather.weather[0].main} </p>
    <p>more detail of weather: ${weather.weather[0].description} </p>
    `;
  weatherContainer.appendChild(div2);
}
