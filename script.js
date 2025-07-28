const apiKey="f3d1e41ad5dabf7e476e84a52fcb492a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox= document.querySelector(".search input");
const sbutton= document.querySelector(".search button");
const weather= document.querySelector(".weather-icon");


async function Checkweather(city) {
    const response =await fetch(apiUrl +  city + `&appid=${apiKey}`);

    
    var data =await response.json();

    console.log(data)
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weather.src="/images/clouds.png"
    }else if(data.weather[0].main=="Clear"){
        weather.src="/images/clear.png"
    } 
    else if(data.weather[0].main=="Rain"){
        weather.src="/images/rain.png"
    } 
    else if(data.weather[0].main=="Drizzle"){
        weather.src="/images/drizzle.png"
    } 
    else if(data.weather[0].main=="Mist"){
        weather.src="/images/mist.png"
        
    } 
    
 

}
sbutton.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }
  Checkweather(city);
});
