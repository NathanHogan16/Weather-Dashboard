$("#city-form").submit(function(event){ 
    event.preventDefault();

    var cityName = $("#city-name").val();
    getWeather(cityName);  
});

/* api added to call weather by city */
function getWeather(city){
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=d11771b7ba65e99baa089a03cbd1362b", function(data){
      console.log(data);

        $("#city").html(data.main.name);
        $("#description").html(data.weather[0].description);
        $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $("#temp").html("Temperatue: " + data.main.temp + " °F");
        $("#humidity").html("Humidity: " + data.main.humidity + "%");
        $("#speed").html("Wind Speed: " + data.wind.speed + " mph");
    });
    /* api added to call 5-day forecast */
    $.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=d11771b7ba65e99baa089a03cbd1362b", function(data){
    console.log(data);

/* adding variables for moment .js, and api to display each day of 5-day forecast date, icon, temp, and humidity */
/* DAY ONE */
  var dayOne = moment().format("M/D/YYYY");
  var dayOneIcon = data.list[0].weather[0].icon;
  var dayOneImage = "http://openweathermap.org/img/wn/" + dayOneIcon + ".png";
  var dayOneImageSrc = $("<img>").attr("src", dayOneImage);
  var dayOneTemp = data.list[0].main.temp + " °F";
  var dayOneTempFar = (dayOneTemp - 273.15) * 1.8 + 32;
  /* var dayOneTempFixed = dayOneTempFar.toFixed(1); */
  var dayOneHum = data.list[0].main.humidity + "%";

/* DISPLAY and APPEND DAY ONE DATA */
  var dayOneDateEl = $("<p>").text(dayOne);
  var dayOneImageEl = $("<p>").text(dayOneIcon);
  var dayOneTempEl = $("<p>").text("Temp: " + dayOneTemp);
  var dayOneHumEl = $("<p>").text("Humidity: " + dayOneHum);

    $(".dayOne").append(dayOneDateEl);
    $(".dayOne").append(dayOneImageEl);
    $(".dayOne").append(dayOneTempEl);
    $(".dayOne").append(dayOneHumEl);

/* DAY TWO */
  var dayTwo = moment().add(1, "days").format("M/D/YYYY");
  var dayTwoIcon = data.list[8].weather[0].icon;
  var dayTwoImage = "http://openweathermap.org/img/wn/" + dayTwoIcon + ".png";
  var dayTwoImageSrc = $("<img>").attr("src", dayTwoImage);
  var dayTwoTemp = data.list[8].main.temp + " °F";
  var dayTwoTempFar = (dayTwoTemp - 273.15) * 1.8 + 32;
  var dayTwoTempFixed = dayTwoTempFar.toFixed(1); 
  var dayTwoHum = data.list[8].main.humidity + "%";

/* DISPLAY and APPEND DAY TWO DATA */
  var dayTwoDateEl = $("<p>").text(dayTwo);
  var dayTwoImageEl = $("<p>").text(dayTwoIcon);
  var dayTwoTempEl = $("<p>").text("Temp: " + dayTwoTemp);
  var dayTwoHumEl = $("<p>").text("Humidity: " + dayTwoHum);

    $(".dayTwo").append(dayTwoDateEl);
    $(".dayTwo").append(dayTwoImageEl);
    $(".dayTwo").append(dayTwoTempEl);
    $(".dayTwo").append(dayTwoHumEl);

/* DAY THREE */
  var dayThree = moment().add(2, "days").format("M/D/YYYY");
  var dayThreeIcon = data.list[16].weather[0].icon;
  var dayThreeImage = "http://openweathermap.org/img/wn/" + dayThreeIcon + ".png";
  var dayThreeImageSrc = $("<img>").attr("src", dayThreeImage);
  var dayThreeTemp = data.list[16].main.temp + " °F";
  var dayThreeTempFar = (dayThreeTemp - 273.15) * 1.8 + 32;
  var dayThreeTempFixed = dayThreeTempFar.toFixed(1); 
  var dayThreeHum = data.list[16].main.humidity + "%";

/* DISPLAY and APPEND DAY THREE DATA */
  var dayThreeDateEl = $("<p>").text(dayThree);
  var dayThreeImageEl = $("<p>").text(dayThreeIcon);
  var dayThreeTempEl = $("<p>").text("Temp: " + dayThreeTemp);
  var dayThreeHumEl = $("<p>").text("Humidity: " + dayThreeHum);

    $(".dayThree").append(dayThreeDateEl);
    $(".dayThree").append(dayThreeImageEl);
    $(".dayThree").append(dayThreeTempEl);
    $(".dayThree").append(dayThreeHumEl);

/* DAY FOUR */
  var dayFour = moment().add(3, "days").format("M/D/YYYY");
  var dayFourIcon = data.list[24].weather[0].icon;
  var dayFourImage = "http://openweathermap.org/img/wn/" + dayFourIcon + ".png";
  var dayFourImageSrc = $("<img>").attr("src", dayFourImage);
  var dayFourTemp = data.list[24].main.temp + " °F";
  var dayFourTempFar = (dayFourTemp - 273.15) * 1.8 + 32;
  var dayFourTempFixed = dayFourTempFar.toFixed(1); 
  var dayFourHum = data.list[24].main.humidity + "%";

/* DISPLAY and APPEND DAY FOUR DATA */
  var dayFourDateEl = $("<p>").text(dayFour);
  var dayFourImageEl = $("<p>").text(dayFourIcon);
  var dayFourTempEl = $("<p>").text("Temp: " + dayFourTemp);
  var dayFourHumEl = $("<p>").text("Humidity: " + dayFourHum);

    $(".dayFour").append(dayFourDateEl);
    $(".dayFour").append(dayFourImageEl);
    $(".dayFour").append(dayFourTempEl);
    $(".dayFour").append(dayFourHumEl);

/* DAY FIVE */
  var dayFive = moment().add(4, "days").format("M/D/YYYY");
  var dayFiveIcon = data.list[32].weather[0].icon;
  var dayFiveImage = "http://openweathermap.org/img/wn/" + dayFiveIcon + ".png";
  var dayFiveImageSrc = $("<img>").attr("src", dayFiveImage);
  var dayFiveTemp = data.list[32].main.temp + " °F";
  var dayFiveTempFar = (dayFiveTemp - 273.15) * 1.8 + 32;
  var dayFiveTempFixed = dayFiveTempFar.toFixed(1); 
  var dayFiveHum = data.list[32].main.humidity + "%";

/* DISPLAY and APPEND DAY FIVE DATA */
  var dayFiveDateEl = $("<p>").text(dayFive);
  var dayFiveImageEl = $("<p>").text(dayFiveIcon);
  var dayFiveTempEl = $("<p>").text("Temp: " + dayFiveTemp);
  var dayFiveHumEl = $("<p>").text("Humidity: " + dayFiveHum);

    $(".dayFive").append(dayFiveDateEl);
    $(".dayFive").append(dayFiveImageEl);
    $(".dayFive").append(dayFiveTempEl);
    $(".dayFive").append(dayFiveHumEl);

})
}
/* added moment.js for current day's date */
  var currentDate = moment().format('M/D/YYYY');
  var mainDate = document.getElementById('currentDay');
  date.innerHTML = currentDate;
