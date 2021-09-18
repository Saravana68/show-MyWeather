/* Dom Manipulation part */
const cityForm = document.querySelector("form");
const card = document.querySelector(".weather-box");
const details = document.querySelector(".weather-info");
const time = document.querySelector(".weather-img");
const icon = document.querySelector(".icon");
const body = document.querySelector('body');
// icon.setAttribute('src', 'src/icons/2.svg');


//updating UI in WEBSITE
const updateUI = (data) => {
  const { cityDets, weather,foreCast } = data;

  //update Details template
  details.innerHTML = `<h5 class="city-name">${cityDets.EnglishName}</h5>
              <div class="weather-condition">${weather.WeatherText}!</div>
              <div class="weather-temperature">
                  <span class="number">${weather.Temperature.Metric.Value}</span>
                  <span>&deg; c</span>
              </div>
              <div class="weather-text">
            <p>&quot${foreCast.Headline.Text}&quot</p>
          </div>`;

  // update day and night images
  let iconSrc = `src/icons/${weather.WeatherIcon}.svg`;
 icon.setAttribute("src", "src/icons/2.svg");
  
  let imgSrc = null;
  if (weather.IsDayTime) {
    imgSrc = "./Src/clouds.gif";
    time.setAttribute('src', imgSrc);
  }
  else imgSrc = "./Src/moon.gif";
  time.setAttribute('src', imgSrc);

  //remove display:none
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  //cityAPI call and location API call
  const cityDets = await getCity(city);
  const foreCast = await getForeCast(cityDets.Key);
  const weather = await getWeather(cityDets.Key);

  return { cityDets, weather,foreCast };
};
updateCity("India")
  .then((data) => updateUI(data))
  .catch((err) => console.log(err));
cityForm.addEventListener("submit", (e) => {
  //prevent Default action
  e.preventDefault();
  e.preventDefault();

  //get city Value
  const city = cityForm.input.value.trim();
  cityForm.reset();

  //calling updatecity() to update city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});

