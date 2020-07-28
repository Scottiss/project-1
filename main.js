//   API KEYS
let weatherID = "8922c7c9ff2ae54c2727e6a09d80cc98";
let trailID = "200845268-2016567b3b52abddf0f22a66980c383e";

// HIDES WEATHER AND TRAIL DIVS
$("#show-weather").hide();
$("#show-trail").hide();

// BUTTON
$(".btn").click(function () {
  var trailSearch = $(this).prev().val();

  // SHOWS WEATHER AND TRAIL DIVS WHEN BUTTON CLICKED
  $("#show-trail").show();
  $("#show-weather").show();

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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=Imperial&appid=${weatherID}`,
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
        trailResults.empty();
        for (i = 0; i < data.trails.length; i++) {
          var trailStrg = `<div class="col"><img id="hike-pic" src='${data.trails[i].imgMedium}' /></div>
          
        <div class="col">Name: <span id="hike-name">${data.trails[i].name}</span></div>
        <br>
        <div class="col">Location: <span id="location">${data.trails[i].location}</span></div>
          <br>
        <div class="col">Condition Status: <span id="condition-status">${data.trails[i].conditionStatus}</span></div>
          <br>
        <div class="col">Hike type: <span id="hike-type">${data.trails[0].type}</span></div>
          <br>
        <div class="col">Hike Summary: <span id="hike-summary">${data.trails[i].summary}</span></div>
        <br>
        <div class="col">For more info about this trail:<a href="${data.trails[i].url}">${data.trails[i].url}</a></div>`;

          trailResults.append(trailStrg);
        }
        console.log(data);
      }
    );
  });
});
