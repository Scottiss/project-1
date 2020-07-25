let searchBtn = ".btn";

//   API KEYS
let weatherID = "8922c7c9ff2ae54c2727e6a09d80cc98";
let trailID = "200845268-2016567b3b52abddf0f22a66980c383e";

// BUTTON
$(searchBtn).click(function () {
  var trailSearch = $(this).prev().val();
  console.log(trailSearch);

  //   BUTTON SEARCH BY ZIPCODE
  if ($(this).prev().attr("placeholder") == "Search by Zipcode") {
    var weather =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      trailSearch +
      "&units=Imperial&APPID=" +
      weatherID;
  }

  //   WEATHER COORDINATES
  $.get(weather, function (response) {
    var coord = response.coord;

    var weatherUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      coord.lat +
      "&lon=" +
      coord.lon +
      "&appid=" +
      weatherID;
    console.log(coord);

    //  TRAIL API
    $.getJSON(
      `https://www.hikingproject.com/data/get-trails?lat=${coord.lat}&lon=${coord.lon}&maxDistance=10&key=200845268-2016567b3b52abddf0f22a66980c383e`,
      function (data) {
        console.log(data);
      }
    );
    // TRAIL LATITUDE AND LONGITUDE --GLOBAL VARIABLES BUT ALSO USED IN FUNCTION BELOW
    // let trailLatEl = data.trails[0].latitude;
    // let trailLongEl = data.trails[0].longitude;
    // console.log(trailLatEl, trailLongEl);

    // let trailLat = coord.lat;
    // let trailLong = coord.lon;
    // console.log(trailLat, trailLong);
  });
});
