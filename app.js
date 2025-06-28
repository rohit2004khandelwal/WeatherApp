const apikey = "c21c423414b3153fba0a69847b32a7b9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=jaipur";

async function checkweather() {
    try {
        const response = await fetch(apiurl + `&appid=${apikey}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("API error:", error);
    }
}

checkweather();
