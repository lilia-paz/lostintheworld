$.ajax({
    url: "https://data.sfgov.org/resource/cf6e-9e4j.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
  }).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
  });
  
  function Point(x, y) {
      this.latitude = latitude;
      this.longitude = longitude;
    }
  
  var p = new Point(37.797557,-122.4012137);
  var r = new Point(37.77245,-122.4119627);
  var 
  
  var myMap = new Map();
  myMap.set(94111, p);
  myMap.set(94103, r);
  