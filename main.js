let searchBtn = "btn";

//   API KEYS
let weatherID = "8922c7c9ff2ae54c2727e6a09d80cc98";
let trailID = "200845268-2016567b3b52abddf0f22a66980c383e";

// THIS SHOULD GRAB TRAIL INFO WITH SEARCHED COORDINATES
// $.getJSON(
//   "https://www.hikingproject.com/data/get-trails?lat=" +
//     trailLat +
//     "&lon=" +
//     trailLong +
//     "&maxDistance=10" +
//     "&appid=" +
//     trailID,
// function (data) {
//     console.log(data);
//   }
// );

//  TRAIL API - EXAMPLE LINK IS ATTACHED
$.getJSON(
  "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200845268-2016567b3b52abddf0f22a66980c383e",
  function (data) {
    console.log(data);
  }
);

// TRAIL LATITUDE AND LONGITUDE --GLOBAL VARIABLES BUT ALSO USED IN FUNCTION BELOW
let trailLat = data.trails[0].latitude;
let trailLong = data.trails[0].longitude;

// WEATHER API WITH COORDINATES
let weather =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  coord.lat +
  "&lon=" +
  coord.lon +
  "&appid=" +
  weatherID;

// GETS WEATHER DATA
$.get(weather, function (response) {
  var coord = response.coord;

  //   var queryUrl =
  //     "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  //     coord.lat +
  //     "&lon=" +
  //     coord.lon +
  //     "&appid=" +
  //     appID;

  let trailLat = coord.lat;
  let trailLong = coord.lon;
});

// SEARCH BUTTON
$(searchBtn).click(function () {
  var trailSearch = $(this).prev().val();
  console.log(this);
  // if ($(this).prev().attr("placeholder") == "Search by Location"){
  //   var getLocation = data.trails.
  //   {appid}&lat={lat}&lon={lon}"
});
