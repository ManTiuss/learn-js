$(document).ready(function () {
    const apiKey = "5d066958a60d315387d9492393935c19";
    const city = "LVIV";

    const temperatureElement = $("#temperature");
    const pressureElement = $("#pressure");
    const descriptionElement = $("#description");
    const humidityElement = $("#humidity");
    const windSpeedElement = $("#wind-speed");
    const windDegElement = $("#wind-deg");
    const weatherIconElement = $("#weather-icon");

    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    $.ajax({
        url: weatherUrl,
        type: "GET",
        dataType: "json",
        success: function (data) {
            temperatureElement.text(data.main.temp);
            pressureElement.text(data.main.pressure);
            descriptionElement.text(data.weather[0].description);
            humidityElement.text(data.main.humidity);
            windSpeedElement.text(data.wind.speed);
            windDegElement.text(data.wind.deg);
            weatherIconElement.attr("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        },
        error: function (error) {
            console.log("Помилка отримання даних про погоду: " + error);
        }
    });
});
