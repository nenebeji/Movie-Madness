var movieTitle = document.querySelector("#searchinput");
var searchBtn = document.querySelector("#searchbtn");
var year = document.querySelector("#yearinput");
var media = document.querySelector("#mediainput");
var imbdId = document.querySelector("#IMBdinput");

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

    //Pass parameter to the main page
    console.debug(year,media,imbdId);
     //location.href="./result.html/?t=" + movieTitle + "&y=" + year + "&m="+media+"&id="+ imbdId; 
     console.debug("./results.html?t=" + movieTitle + "&y=" + year + "&m="+media+"&id="+ imbdId);
     
     window.location.href="./results.html?t=" + movieTitle + "&y=" + year + "&m="+media+"&id="+ imbdId;

  }
}
