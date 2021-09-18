// AccuWeather API key
const key = "udACIHA1z24eQR2rsgLdj8uANSyunKxX";

//Forecase API call
const getForeCast = async (id) => {
  const base = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log(data.Headline.Text);
  text = data.Headline.Text;
  return data;
};

/* Location API call */
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  console.log(data[0]);
  console.log(data[0].LocalObservationDateTime);
  return data[0];
};

/* City API call */
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
