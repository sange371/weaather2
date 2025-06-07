function updateTemperature(response) {
    console.log(response.data);

    let h1=document.querySelector("h1");
    let cityInput=document.querySelector("#city-name-input");
    let dayTime=document.querySelector(".day");
    let time=document.querySelector("time");
    let condition=document.querySelector(".condition");
    let humidity=document.querySelector(".humidity");
    let windSpeed=document.querySelector(".speed");
    let temperature=Math.round(response.data.current.temp_c);
    let conditonElement=response.data.current.condition.text;
    let humidityElement=response.data.current.humidity;
    let windSpeedElement=response.data.current.wind_kph;
    let temperatureElement=document.querySelector(".temperature");
    let emoji=document.querySelector(".emoji");
    let emojiElement=response.data.current.condition.icon;
    let degree=document.querySelector("degree");

    let cityValue=cityInput.value;
    h1.innerHTML=`${cityValue}`;

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let now=new Date();
    let day=days[now.getDay()];
    let hours=now.getHours();
    let formattedHours=hours.toString().padStart(2,"0");
    let minutes=now.getMinutes();
    let formattedMinutes=minutes.toString().padStart(2,"0");

    dayTime.innerHTML=`${day}`;
    time.innerHTML=`${formattedHours}:${formattedMinutes}`;
    condition.innerHTML=`${conditionElement}`;
    humidity.innerHTML=`${humidityElement}%`;
    windSpeed.innerHTML=`${windSpeedElement} km/h`;
    temperatureElement.innerHTML=`${temperature}`;





}
