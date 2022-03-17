//getElementsByClassName ==> $(".selector")
const formJS = $(".top-banner form")[0];
const formJQ = $(".top-banner form").eq(0);
const formJQ2 = $(".top-banner form").first();

const inputJquery = $(".top-banner input").eq(0);
const inputJs = $(".top-banner input")[0];

const msg = $(".top-banner input span").eq(0);

const list = $(".cities").eq(0);

// window.addEventListener('DOMContentLoaded',function);

$(document).ready(() => {
  console.log("DOMContentLoaded");
  localStorage.setItem("apiKey", "");
});

//window.addEventListener('load',function) == window.onload
$(window).on("load", () => {
  console.log("window loaded");
});

formJQ.on("submit", (e) => {
  e.preventDefault();
  alert("form submitted! ");
});
