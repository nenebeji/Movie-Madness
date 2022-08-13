var movieTitle = document.querySelector("#searchinput");
var searchBtn = document.querySelector("#searchbtn");
var year = document.querySelector("#yearinput");
var media = document.querySelector("#mediainput");
var imbdId = document.querySelector("#IMBdinput");
var apikey = "27e13cea";

$("#mediainput").dropdown();

var prevSearches = JSON.parse(localStorage.getItem("searches")) || [];

function init(){
  showOptionModal();
  autoSearch();
}


function showOptionModal(){
  $( function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Search by Movie": function() {
          $( this ).dialog( "close" );
          return;
        },
        imbdId: function() {
          $( this ).dialog( "close" );
          $("#SearchInput, #YearInput, #Media").addClass("disabled");
          searchBtn.removeEventListener("click", searchFunction);
          searchBtn.addEventListener("click", searchFunctionImbdId);
        }
      }
    });
  } );
}

function searchFunctionImbdId(){
  if (!imbdId.value){
    $('#modal1').modal('show');
  } else {
    imbdId = imbdId.value;
    window.location.href="./results.html?i=" + imbdId;
  }
}

searchBtn.addEventListener("click", searchFunction);

function autoSearch(){
    $("#searchinput").autocomplete({
      source: prevSearches
    });
}

function searchFunction(){
  if(!movieTitle.value){
    $('#modal1').modal('show');
    $('#modalInnerText').text("Please input a Movie Title");
    year.value = "";
    return searchFunction;
  } else if (!year.value || isNaN(year.value)){
    $('#modal1').modal('show');
    $('#modalInnerText').text("Please input a year");
    movieTitle.value = "";
    return searchFunction;
  } else {
    movieTitle = movieTitle.value.replaceAll(" ", "+");
    if (!prevSearches.includes(movieTitle)){ 
      prevSearches.push(movieTitle);
      localStorage.setItem("searches", JSON.stringify(prevSearches));
    }
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

init();