        if (weatherInfo.current_weather.weathercode === 0) {
            weatherCurrently = "Clear Sky"
        } 



if (weatherInfo.current_weather.weathercode === 0) {
    weatherCurrently = "Clear Sky";
} else if (weatherInfo.current_weather.weathercode === 1) {
    weatherCurrently = "Mainly clear"
} || weatherInfo.current_weather.weathercode === 2 || weatherInfo.current_weather.weathercode === 3) {
    weatherCurrently = "Mainly clear, partly cloudy, and overcast";
} else if (weatherInfo.current_weather.weathercode === 45 || weatherInfo.current_weather.weathercode === 48) {
    weatherCurrently = "Fog and depositing rime fog";
} else if (weatherInfo.current_weather.weathercode === 51 || weatherInfo.current_weather.weathercode === 53 || weatherInfo.current_weather.weathercode === 55) {
    weatherCurrently = "Drizzle: Light, moderate, and dense intensity";
} else if (weatherInfo.current_weather.weathercode === 56 || weatherInfo.current_weather.weathercode === 57) {
    weatherCurrently = "Freezing Drizzle: Light and dense intensity";
} else if (weatherInfo.current_weather.weathercode === 61 || weatherInfo.current_weather.weathercode === 63 || weatherInfo.current_weather.weathercode === 65) {
    weatherCurrently = "Rain: Slight, moderate and heavy intensity";
} else if (weatherInfo.current_weather.weathercode === 66 || weatherInfo.current_weather.weathercode === 67) {
    weatherCurrently = "Freezing Rain: Light and heavy intensity";
} else if (weatherInfo.current_weather.weathercode === 71 || weatherInfo.current_weather.weathercode === 73 || weatherInfo.current_weather.weathercode === 75) {
    weatherCurrently = "Snow fall: Slight, moderate, and heavy intensity";
} else if (weatherInfo.current_weather.weathercode === 77) {
    weatherCurrently = "Snow grains";
} else if (weatherInfo.current_weather.weathercode === 80 || weatherInfo.current_weather.weathercode === 81 || weatherInfo.current_weather.weathercode === 82) {
    weatherCurrently = "Rain showers: Slight, moderate, and violent";
} else if (weatherInfo.current_weather.weathercode === 85 || weatherInfo.current_weather.weathercode === 86) {
    weatherCurrently = "Snow showers slight and heavy";
} else if (weatherInfo.current_weather.weathercode === 95) {
    weatherCurrently = "Thunderstorm: Slight or moderate";
} else if (weatherInfo.current_weather.weathercode === 96 || weatherInfo.current_weather.weathercode === 99) {
    weatherCurrently = "Thunderstorm with slight and heavy hail";
}


switch (weatherInfo.current_weather.weathercode) {
    case 0:
        weatherCurrently = "Clear sky";
        break;
    case 1:
        weatherCurrently = "Partly cloudy";
        break;
    case 2:
        weatherCurrently = "Overcast";
        break;
    case 3:
        weatherCurrently = "Mainly clear";
        break;
    case 45:
    case 48:
        weatherCurrently = "Fog";
        break;
    case 51:
        weatherCurrently = "Light Drizzle";
    case 53:
        weatherCurrently = "Moderate Drizzle";
    case 55:
        weatherCurrently = "Intense Drizzle";
        break;
    case 56:
        weatherCurrently = "Freezing Light Drizzle"
    case 57:
        weatherCurrently = "Dense Freezing Drizzle";
        break;
    case 61:
        weatherCurrently = "Slight Rain";
    case 63:
        weatherCurrently = "Moderate Rain";
    case 65:
        weatherCurrently = "Heavy Rain";
        break;
    case 66:
        weatherCurrently = "Freezing Light Rain";
    case 67:
        weatherCurrently = "Freezing Heavy Rain";
        break;
    case 71:
        weatherCurrently = "Slight Snow fall";
    case 73:
        weatherCurrently = "Moderate Snow fall";
    case 75:
        weatherCurrently = "Heavy Snow fall";
        break;
    case 77:
        weatherCurrently = "Snow grains";
        break;
    case 80:
        weatherCurrently = "Slight Rain showers";
    case 81:
        weatherCurrently = "Moderate Rain showers";
    case 82:
        weatherCurrently = "Heavy Rain showers";
        break;
    case 85:
        weatherCurrently = "Slight Snow showers";
    case 86:
        weatherCurrently = "Heavy Snow showers";
        break;
    case 95:
        weatherCurrently = "Thunderstorm";
        break;
    case 96:
        weatherCurrently = "Thunderstorm with slight hail";
    case 99:
        weatherCurrently = "Thunderstorm with heavy hail";
        break;
    default:
        weatherCurrently = "unknown";
}
