const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const country = document.getElementById("country");

async function getLatLng() {
  const { data } = await axios.get("https://freegeoip.app/json/");
  return data;
}

async function getSunriseSunset(lat, lng) {
  const { data } = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`);
  return data;
}

const showData = async () => {
  const { latitude, longitude, city } = await getLatLng();

  const { results } = await getSunriseSunset(latitude, longitude);

  country.innerText = city;
  sunrise.innerText = `${results.sunrise} UTC`;
  sunset.innerText = `${results.sunset} UTC`;
};

showData();
