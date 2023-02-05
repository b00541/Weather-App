
// To test this you'll need to open city.html in a browser as it contains prompts and alerts.
//I had to use a different Weather API than the one recommended in the PDF as it was limmited 
//to only 25 requests a day. The one I used does all the things the recommended one does.
//===============================================================
//                       API KEY
//===============================================================
//This is the the API key given in the GeoDB Cities Documentation


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '031a724eefmsh53afe8fc659f636p1b2b7djsne01583e05b23',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
}


let input = document.getElementById('input')
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        document.getElementById('addButton').click()
    }
})


async function fetchData() {

    //--------------------------------------------------------------------------------------------------------------------------------------------------
    //This is to handle user errors. Before it was added, if user just pressed enter for the prompt it would return the first city in SA begining with A
    let i = 0
    let userCity = input.value
    input.value = ""

    //----------------------------------------------------------------------------------------------------------------------------------------------------

    //‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣
    //This for the first API fetch. It is used to return info such as Name, Population, Longitude and Latitude
    let cityLink = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=${userCity}&sort=-population`
    const response1 = await fetch(cityLink, options)
    const cityInfo = await response1.json()
    if (!response1.ok) {
        alert(`HTTP error! status: ${response1.status}`)
    }
    //‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣

    //————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    //This is for the second API fetch, it takes data from the previous fetch and passes it into this one to output the correct corresponding information
    let latitude = cityInfo.data[0].latitude
    let longitude = cityInfo.data[0].longitude
    let weatherLink = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true&start_date=2023-01-24&end_date=2023-01-24`
    const response2 = await fetch(weatherLink)
    const weatherInfo = await response2.json()
    let weatherCurrently
    console.log(weatherInfo)
    console.log(cityInfo)
    switch (weatherInfo.current_weather.weathercode) {
        case 0:
            weatherCurrently = "Clear sky";
            document.body.style.backgroundImage = "url('/weatherPics/sunny.jpg')";
            break;
        case 1:
            weatherCurrently = "Partly cloudy";
            document.body.style.backgroundImage = "url('weatherPics/partly-cloudy.jpg')";
            break;
        case 2:
            weatherCurrently = "Overcast";
            document.body.style.backgroundImage = "url('weatherPics/cloudy.jpg')";
            break;
        case 3:
            weatherCurrently = "Overcast";
            document.body.style.backgroundImage = "url('weatherPics/cloudy.jpg')";
            break;
        case 45:
        case 48:
            weatherCurrently = "Fog";
            document.body.style.backgroundImage = "url('weatherPics/fog.jpg')";
            break;
        case 51:
            weatherCurrently = "Light Drizzle";
            document.body.style.backgroundImage = "url('weatherPics/drizzle.jpg')";
        case 53:
            weatherCurrently = "Moderate Drizzle";
            document.body.style.backgroundImage = "url('weatherPics/drizzle.jpg')";
        case 55:
            weatherCurrently = "Intense Drizzle";
            document.body.style.backgroundImage = "url('weatherPics/drizzle.jpg')";
            break;
        case 56:
            weatherCurrently = "Freezing Light Drizzle"
            document.body.style.backgroundImage = "url('weatherPics/drizzle.jpg')";
        case 57:
            weatherCurrently = "Dense Freezing Drizzle";
            document.body.style.backgroundImage = "url('weatherPics/drizzle.jpg')";
            break;
        case 61:
            weatherCurrently = "Slight Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
        case 63:
            weatherCurrently = "Moderate Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
        case 65:
            weatherCurrently = "Heavy Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
            break;
        case 66:
            weatherCurrently = "Freezing Light Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
        case 67:
            weatherCurrently = "Freezing Heavy Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
            break;
        case 71:
            weatherCurrently = "Slight Snow fall";
            document.body.style.backgroundImage = "url('weatherPics/snow.jpg')";
        case 73:
            weatherCurrently = "Moderate Snow fall";
            document.body.style.backgroundImage = "url('weatherPics/snow.jpg')";
        case 75:
            weatherCurrently = "Heavy Snow fall";
            document.body.style.backgroundImage = "url('weatherPics/snow.jpg')";
            break;
        case 77:
            weatherCurrently = "Snow grains";
            document.body.style.backgroundImage = "url('weatherPics/snow.jpg')";
            break;
        case 80:
            weatherCurrently = "Slight Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
        case 81:
            weatherCurrently = "Moderate Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
        case 82:
            weatherCurrently = "Heavy Rain";
            document.body.style.backgroundImage = "url('weatherPics/rain.jpg')";
            break;
        case 85:
            weatherCurrently = "Slight Snow";
            document.body.style.backgroundImage = "url('weatherPics/drizzle.jpg')";
        case 86:
            weatherCurrently = "Heavy Snow";
            document.body.style.backgroundImage = "url('weatherPics/drizzle.jpg')";
            break;
        case 95:
            weatherCurrently = "Thunderstorm";
            document.body.style.backgroundImage = "url('weatherPics/thunderstorm.jpg')";
            break;
        case 96:
            weatherCurrently = "Thunderstorm with slight hail";
            document.body.style.backgroundImage = "url('weatherPics/thunderstorm.jpg')";
        case 99:
            weatherCurrently = "Thunderstorm with heavy hail";
            document.body.style.backgroundImage = "url('weatherPics/thunderstorm.jpg')";
            break;
        default:
            weatherCurrently = "unknown";
    }
    document.getElementById('city').innerHTML = `${cityInfo.data[0].city}<br>Country: ${cityInfo.data[0].country} <br>Elevation: ${weatherInfo.elevation}m <br>${weatherCurrently}<br>Current Temperature: ${weatherInfo.current_weather.temperature}°C`
    document.getElementById('midnightPast').innerHTML = `${weatherInfo.hourly.temperature_2m[0]}°C`
    document.getElementById('3am').innerHTML = `${weatherInfo.hourly.temperature_2m[2]}°C`
    document.getElementById('6am').innerHTML = `${weatherInfo.hourly.temperature_2m[5]}°C`
    document.getElementById('9am').innerHTML = `${weatherInfo.hourly.temperature_2m[8]}°C`
    document.getElementById('midday').innerHTML = `${weatherInfo.hourly.temperature_2m[11]}°C`
    document.getElementById('3pm').innerHTML = `${weatherInfo.hourly.temperature_2m[14]}°C`
    document.getElementById('6pm').innerHTML = `${weatherInfo.hourly.temperature_2m[17]}°C`
    document.getElementById('9pm').innerHTML = `${weatherInfo.hourly.temperature_2m[20]}°C`
    document.getElementById('midnightfuture').innerHTML = `${weatherInfo.hourly.temperature_2m[23]}°C`

    if (!response2.ok) {
        alert(`HTTP error! status: ${response2.status}`)
        //————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    }

}

fetchData()




/*                            (●'◡'●)                              */




//===================================================================
//BELOW IS THE SAME CODE AS ABOVE WITHOUT COMMENTS FOR EASIER READING
//===================================================================


// ===============================================================
//                        API KEY
// ===============================================================
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '031a724eefmsh53afe8fc659f636p1b2b7djsne01583e05b23',
//     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//   }
// }

// ===============================================================
//                       ASYNC FUNCTION
// ===============================================================
// async function fetchData() {
//   try {
//     let i = 0
//     let userCity
//     do {
//       let userCityHolder = prompt("Please enter city!\n e.g. Cape Town, Pretoria or Johannesburg")
//       if (userCityHolder === '' || userCityHolder === ' ') {
//         alert("The city you entered was not recognised!")
//         i = 0
//       } else {
//         i = 22
//         userCity = userCityHolder
//       }
//     } while (i < 1)
//     let cityLink = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=Q258&namePrefix=${userCity}&namePrefixDefaultLangResults=true`
//     const response1 = await fetch(cityLink, options)
//     const cityInfo = await response1.json()
//     if (!response1.ok) {
//       throw new Error(`HTTP error! status: ${response1.status}`)
//     }
//     let latitude = cityInfo.data[0].latitude
//     let longitude = cityInfo.data[0].longitude
//     let weatherLink = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true&start_date=2023-01-24&end_date=2023-01-24`
//     const response2 = await fetch(weatherLink)
//     const weatherInfo = await response2.json()
//     alert(`City name: ${cityInfo.data[0].city} \nPopulation: ${cityInfo.data[0].population}\nElevation: ${weatherInfo.elevation}m \nCurrent Temperature: ${weatherInfo.current_weather.temperature} °C`);
//     if (!response2.ok) {
//       throw new Error(`HTTP error! status: ${response2.status}`)
//     }
//   } catch (error) {
//     alert("The city you entered was not recognised!")
//   }
// }

// fetchData();