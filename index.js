var data1 = new XMLHttpRequest();

data1.open("GET", "https://restcountries.eu/rest/v2/all", true);

data1.send();

data1.onload = function () {
  var data = JSON.parse(this.response);

  for (var i in data) {
    console.log(data[i].name);
  }
};


