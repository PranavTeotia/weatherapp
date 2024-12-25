




// const apiKey = "22fa50e3dbe6f5a57eb778eb241d0307";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon")
// async function checkweather(City) {
//     if (!City) {
//         alert("Please enter a city name.");
//         return;
//     }
    
//     const response = await fetch(apiUrl + City + `&appid=${apiKey}`);
    
//     // Check if response is OK
//     if (!response.ok) {
//         alert("City not found or invalid.");
//         return;
//     }
    
//     var data = await response.json();
    
//     // Ensure data is valid
//     if (data.main) {
//         console.log(data);
        
//         document.querySelector(".City").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
//         if(data.weather[0].main == "Clouds"){
//             weatherIcon.scr = "images/clouds.png";
//         }
//         else if(data.weather[0].main == "Clear"){
//             weatherIcon.scr = "images/clear.png";
//         }
//         else if(data.weather[0].main == "Drizzle"){
//             weatherIcon.scr = "images/drizzle.png";
//         }
//         else if(data.weather[0].main == "Rain"){
//             weatherIcon.scr = "images/rain.png";
//         }
//         else if(data.weather[0].main == "Mist"){
//             weatherIcon.scr = "images/mist.png";
//         }


//     } else {
//         alert("Weather data is unavailable.");


//     }
// }

// // Add event listener for search button
// searchBtn.addEventListener("click", () => {
//     checkweather(searchBox.value); 
// });



const apiKey = "22fa50e3dbe6f5a57eb778eb241d0307";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(City) {
    if (!City) {
        alert("Please enter a city name.");
        return;
    }

    const response = await fetch(apiUrl + City + `&appid=${apiKey}`);

    // Check if response is OK
    if (!response.ok) {
        alert("City not found or invalid.");
        return;
    }

    var data = await response.json();

    // Ensure data is valid
    if (data.main) {
        

        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        
        // Change weather icon based on the weather condition
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "clouds.png";  // Corrected to "src"
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "clear.png";  // Corrected to "src"
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";  // Corrected to "src"
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain.png";  // Corrected to "src"
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "mist.png";  // Corrected to "src"
        }
        
    } 
    else {
        alert("Weather data is unavailable.");
    }
    document.querySelector(".Weather").style.display = "block";
}

// Add event listener for search button
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});




 