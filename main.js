let searchBtn = ".btn";

//   API KEYS
let weatherID = "8922c7c9ff2ae54c2727e6a09d80cc98";
let trailID = "200845268-2016567b3b52abddf0f22a66980c383e";

// BUTTON FUNCTION
$(searchBtn).click(function () {
  var trailSearch = $(this).prev().val();

  // SEARCH BY ZIPCODE
  if ($(this).prev().attr("placeholder") === "Search by Zipcode") {
    var weather =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      trailSearch +
      "&units=Imperial&APPID=" +
      weatherID;
  }

  //   WEATHER COORDINATES
  $.get(weather, function (response) {
    var coord = response.coord;

    // WEATHER API FOR CURRENT DAY
    $.getJSON(
      `https:api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${weatherID}`,
      function (info) {
        var weatherResults = $(".weather-result-container");
        $("#current-weather").html(info.current.weather[0].main);
        $("#description_weather").html(info.current.weather[0].description);
        $("#temperature").html(info.current.temp);
        $("#humidity").html(info.current.humidity);
        console.log(info);
      }
    );

    //  TRAIL API
    $.getJSON(
      `https://www.hikingproject.com/data/get-trails?lat=${coord.lat}&lon=${coord.lon}&maxDistance=10&key=${trailID}`,
      function (data) {
        var trailResults = $(".trail-result-container");
        // for (i = 0; i < data.trails.length; i++) { I WANT THIS TO LOOP THROUGH OBJECT ARRAY TO GET ALL RESULTS
        // TRAIL RESULTS DIV
        var htmlRes = $("#hike-pic").attr("src", data.trails[1].imgMedium);
        $("#hike-name").html(data.trails[0].name);
        $("#location").html(data.trails[1].location);
        $("#condition-status").html(data.trails[1].conditionStatus);
        $("#hike-type").html(data.trails[1].type);
        $("#hike-summary").html(data.trails[1].summary);
        // $("#url").html(data.trails[1].url); HOW TO GET THIS TO SHOW AS A LINK
        console.log(data);
        // trailResults.append(htmlRes);
      }
    );
  });
});
