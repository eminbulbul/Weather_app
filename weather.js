const form = document.querySelector("section.top-banner form");
const input = document.querySelector("div.container input");
const msg = document.querySelector("span.msg");
const cityList = document.querySelector(".ajax-section .cities");

localStorage.setItem(
  "apiKey",
  EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  alert("api data fetched!!");
};
