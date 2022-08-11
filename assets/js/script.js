var movieTitle = document.querySelector("#searchinput");
var searchBtn = document.querySelector("#searchbtn");
var year = document.querySelector("#yearinput");
var media = document.querySelector("#mediainput");
var imbdId = document.querySelector("#IMBdinput");
var apikey = "27e13cea";
var prevSearches = JSON.parse(localStorage.getItem("searches")) || [];

autoSearch();

searchBtn.addEventListener("click", searchFunction);

function autoSearch(){
    $("#searchinput").autocomplete({
      source: prevSearches
    });
}

function searchFunction(){
  if(!movieTitle.value){
    $('.ui.basic.modal').modal('show');
    year.value = "";
    return searchFunction;
  } else if (!year.value || isNaN(year.value)){
    $('.ui.basic.modal').modal('show');
    $('#modalInnerText').text("Please input a year");
    movieTitle.value = "";
    return searchFunction;
  } else {
    movieTitle = movieTitle.value.replaceAll(" ", "+");
    prevSearches.push(movieTitle);
    localStorage.setItem("searches", JSON.stringify(prevSearches));
    year = year.value;
    media = media.value;
    imbdId = imbdId.value;
    callOmbdAPI(movieTitle, year, media, imbdId);
  }
}

function callOmbdAPI(movieTitle, year, media, imbdId){
  var OmbdURL = "https://www.omdbapi.com/?t=" + movieTitle + "&y=" + year + "&apikey=" + apikey;
  fetch(OmbdURL)
  .then(function(response){
    if (response.ok){
      response.json().then(function(data){
        OmbdData(data, OmbdURL);
        location.href = "./results.html";
      })
    } else {
    $("#modalInnerText").text("Error");
    $('.ui.basic.modal').modal('show');
    }
  })
}

function OmbdData(data, OmbdURL){
  console.log(data, OmbdURL);
}