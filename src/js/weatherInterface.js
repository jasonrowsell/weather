document.addEventListener("DOMContentLoaded", () => {
  var dateDayName = document.querySelector(".date-dayname"),
    weatherTemp = document.querySelector(".weather-temp"),
    weatherPressure = document.getElementById("weather-pressure"),
    weatherHumidity = document.getElementById("weather-humidity"),
    weatherWind = document.getElementById("weather-speed"),
    dayOne = document.getElementById("day-one"),
    dayTwo = document.getElementById("day-two"),
    dayThree = document.getElementById("day-three"),
    dayFour = document.getElementById("day-four"),
    currentDate = new Date(),
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

  updateWeather();

  var dayOneDate = new Date();
  dayOneDate.setDate(new Date().getDate() + 1);

  var dayTwoDate = new Date();
  dayTwoDate.setDate(new Date().getDate() + 2);

  var dayThreeDate = new Date();
  dayThreeDate.setDate(new Date().getDate() + 3);

  var dayFourDate = new Date();
  dayFourDate.setDate(new Date().getDate() + 4);

  currentCity = document.getElementById("current-city");
  dateDayName.innerHTML = days[currentDate.getDay()];
  dayOne.innerHTML = days[dayOneDate.getDay()].substring(0, 3);
  dayTwo.innerHTML = days[dayTwoDate.getDay()].substring(0, 3);
  dayThree.innerHTML = days[dayThreeDate.getDay()].substring(0, 3);
  dayFour.innerHTML = days[dayFourDate.getDay()].substring(0, 3);

  // updates current weather conditions

  function updateWeather() {
    // currentCity.addEventListener("change", (event) => {
    // const city = event.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        weatherTemp.innerHTML = data.main.temp + "°";
        weatherPressure.innerHTML = data.main.pressure;
        weatherHumidity.innerHTML = data.main.humidity + "%";
        weatherWind.innerHTML = data.wind.speed + " km/h";
      });
    // });
  }
});
