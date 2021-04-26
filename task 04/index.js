//Get all the countries from Asia continent /region using Filter function


console.log("hello this is task 04");

var a1 = new XMLHttpRequest;

a1.open("GET","https://restcountries.eu/rest/v2/all",true);

a1.send();

a1.onload = function(){
   var data = JSON.parse(this.response);

   for (var i in data ){
    var contA = data.filter((ele)=>{ return ele.region === "Asia"})

    console.log(contA);
}

//================================================================

//Get all the countries with population of less than 2 lacs using Filter function.

console.log("hello task 04");

var a1 = new XMLHttpRequest;

a1.open("GET","https://restcountries.eu/rest/v2/all",true);

a1.send();

a1.onload = function(){
   var data = JSON.parse(this.response);
 var filterf = data.filter((ele)=> {return ele.population < 200000});

 console.log(filterf);

   }

//================================================================

//Print the following details name, capital, flag using forEach function

console.log("hello task 04");

var a1 = new XMLHttpRequest();

a1.open("GET", "https://restcountries.eu/rest/v2/all", true);

a1.send();

a1.onload = function () {
  var data = JSON.parse(this.response);

  data.forEach((item) => {
    console.log(item.name);
    console.log(item.capital);
    console.log(item.flag);
  });
};

//================================================================

//- Print the total population of countries using reduce function

var a1 = new XMLHttpRequest;

a1.open("GET" , "https://restcountries.eu/rest/v2/all" , true);

a1.send();

a1.onload = function(){
    var data = JSON.parse(this.response);
    var w = [];
    for (var i in data ){
     w.push(data[i].population);
    }

    console.log(w.reduce((d1,d2)=> {return d1+d2;}));

}

   
//================================================================

//- Print the country which use US Dollars as currency.

var a1 = new XMLHttpRequest;

a1.open("GET" , "https://restcountries.eu/rest/v2/all" , true);

a1.send();

a1.onload = function(){
    var data = JSON.parse(this.response);

    for (var i in data){
        if (data[i].currencies[0].code === "USD"){
        console.log(data[i].name);
        }
    }
}
