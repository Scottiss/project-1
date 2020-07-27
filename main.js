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

    // WEATHER API
    $.getJSON(
      `https:api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${weatherID}`,
      function (get) {
        console.log(get);
      }
    );

    //  TRAIL API
    $.getJSON(
      `https://www.hikingproject.com/data/get-trails?lat=${coord.lat}&lon=${coord.lon}&maxDistance=10&key=${trailID}`,
      function (data) {
        // TRAIL RESULTS DIV
        // $("#hike-pic").html(data.trails[1].imgMedium);
        $("#hike-name").html(data.trails[0].name);
        $("#location").html(data.trails[1].location);
        $("#condition-status").html(data.trails[1].conditionStatus);
        $("#hike-type").html(data.trails[1].type);
        $("#hike-summary").html(data.trails[1].summary);
        $("#url").html(data.trails[1].url);
        console.log(data);
      }
    );
  });
});
