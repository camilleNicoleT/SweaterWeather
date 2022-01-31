var apiKey = "8cc9584035b788b6e66184189a43a1d8";
var cityEl =  document.querySelector(".city");
var iconEl = document.querySelector(".icon");
var descriptionEl = document.querySelector(".description");
var tempEl = document.querySelector(".temp");
var humidityEl = document.querySelector(".humidity");
var windEl = document.querySelector(".wind");


var weather = {
    getCurrentWeather: function(city){
        fetch( "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" 
        + city 
        + "&appid=" 
        + apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayCurrentWeather(data));
   },
  displayCurrentWeather: function(data){
    var {name} = data;
    var {icon, description} = data.weather[0];
    var {temp, humidity } = data.main;
    var {speed} = data.wind;
   console.log(name,description,icon,temp,humidity,speed);
   
    cityEl.innerText = "Weather in " + name;
    iconEl.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    descriptionEl.innerText = description;
    tempEl.innerText = temp + "°F";
    humidityEl.innerText = "Humidity: " + humidity + "%";
    windEl.innerText = "Wind speed: " + speed + "km/h";
    document.querySelector(".loading").classList.remove("loading");
 },
    search: function() {
        this.getCurrentWeather(document.querySelector(".search-bar").value);
    }
    
};



// var forecast = {
// getForecast: function(city){
//     fetch( "https://api.openweathermap.org/data/2.5/forecast?q=" 
//         + city 
//         + "&appid=" 
//         + apiKey
//         )
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//    },
// fiveDayWeather: function(data){
//     for (let i = 0; i <= 4; i++) {
//         var { name } = data[i];
//         var {icon, description} = data.list[i].weather;
//         var {temp, humidity } = data.list[i].main;
//         var {speed} = data.list[i].wind;
//         var {uv} = data.list[i].
//       }
    
//     console.log(name,description,icon,temp,humidity,speed, uv);
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".text").innerText = description ;
//     document.querySelector(".temp").innerText= temp + "°F";
//     document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//     document.querySelector(".wind").innerText = speed;
//     document.querySelector(".uv").innerText = uv;
// } }

document.querySelector(".search button")
.addEventListener('click', function() {
    weather.search();
    
});