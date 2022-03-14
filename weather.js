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

const getWeatherDataFromApi = async () => {
  let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  let inputVal = input.value;
  let units = "metric";
  //   let lang = "tr";
  // alert("apiKey : " + apiKey);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=${units}`;

  try {
    const response = await axios(url);
    // console.log(response);
    const { main, name, sys, weather } = response.data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    let createdCityCardLi = document.createElement("li");
    createdCityCardLi.classList.add("city");
    createdCityCardLi.innerHTML = ` 
    <h2 class="city-name" data-name="${name}, ${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
        <img class="city-icon" src="${iconUrl}">
        <figcaption>${weather[0].description}</figcaption>
    </figure>`;
  } catch (error) {
    msg.innerText = error;
  }
};
