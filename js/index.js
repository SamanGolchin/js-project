const apiKey = "237c3572b7dc50f85018296b1448025b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      document.querySelector("img").src = "image/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "image/rain.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "image/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "image/mist.png";
    } else {
      document.querySelector(".wether-icon").src = "image/snow";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
checkWeather();

function rain() {
  let cloud = document.querySelector(".cloud");
  let cloudTwo = document.querySelector(".cloudTwo");
  let cloudThree = document.querySelector(".cloudThree");
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let width = Math.random() * 5;
  let height = Math.random() * 50;
  let duration = Math.random() * 0.5;

  e.classList.add("drop");

  cloudTwo.appendChild(e);
  e.style.left = left + "px";
  e.style.width = 0.5 + width + "px";
  e.style.height = 0.5 + height + "px";
  e.style.animationDuration = 1 + duration + "s";
  setTimeout(function () {
    cloudTwo.removeChild(e);
  }, 2000);
}

setInterval(function () {
  rain();
}, 20);

function rainTwo() {
  let cloud = document.querySelector(".cloud");
  let cloudTwo = document.querySelector(".cloudTwo");
  let cloudThree = document.querySelector(".cloudThree");
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let width = Math.random() * 5;
  let height = Math.random() * 50;
  let duration = Math.random() * 0.5;

  e.classList.add("drop");

  cloud.appendChild(e);
  e.style.left = left + "px";
  e.style.width = 0.5 + width + "px";
  e.style.height = 0.5 + height + "px";
  e.style.animationDuration = 1 + duration + "s";
  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}
setInterval(function () {
  rainTwo();
}, 20);

function rainThree() {
  let cloud = document.querySelector(".cloud");
  let cloudTwo = document.querySelector(".cloudTwo");
  let cloudThree = document.querySelector(".cloudThree");
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let width = Math.random() * 5;
  let height = Math.random() * 25;
  let duration = Math.random() * 0.5;

  e.classList.add("drop");

  cloudThree.appendChild(e);
  e.style.left = left + "px";
  e.style.width = 0.5 + width + "px";
  e.style.height = 0.5 + height + "px";
  e.style.animationDuration = 1 + duration + "s";
  setTimeout(function () {
    cloudThree.removeChild(e);
  }, 2000);
}
setInterval(function () {
  rainThree();
}, 20);
