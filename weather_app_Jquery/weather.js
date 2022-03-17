//getElementsByClassName ==> $(".selector")
const formJS2 = document.querySelector(".top-banner form")[0];
const formJS = $(".top-banner form")[0];
const formJQuery = $(".top-banner form").eq(0);
const formJQuery2 = $(".top-banner form").first();

const inputJQuery = $(".top-banner input").eq(0);
const inputJS = $(".top-banner input")[0];

const msg = $(".top-banner span").eq(0);
const list = $(".cities").eq(0);

//window.addEventListener("load", func) == window.onload
$(window).on("load", () => {
  console.log("window loaded");
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
  );
});

//window.addEventListener("DOMContentLoaded", func)
$(document).ready(() => {
  console.log("DOMContentLoaded");
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("4d8fb5b93d4af21d66a2948710284366")
  );
});

formJQuery.on("submit", (e) => {
  e.preventDefault();
  // alert("form submitted!");
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  // let inputVal = inputJS.value;
  let inputVal = inputJQuery.val();
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=${units}&lang=${lang}`;
};
