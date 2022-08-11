var movieTitle = document.querySelector("#MovieTitle");
var searchBtn = document.querySelector("#searchBtn");
var year = document.querySelector("#YearofRelease");
var episode = document.querySelector("#EpisodeNumber");
var season = document.querySelector("#SeasonNumber");
var apikey = "27e13cea"


// function searchfunction(){
//     //event.preventDefault();
//     console.debug("Search button pressed");     

//     if ($('#MovieTitle').val()===""){   //check if there is any input 
//     $('.ui.basic.modal')
//     .modal('show');
//     }
//     else {
//       var movieTitle = $('#MovieTitle').val();
//       var SeasonNumber=$('#SeasonNumber').val();
//       console.debug(movieTitle);
//       //need to clear the input field
//       $('#MovieTitle').val('');

//       callOmbdAPI(movieTitle,SeasonNumber); //please add other parameter when call the function, season, episode, yearofrelease, etc
          
//     }
// }


// function init(){

// }

// $(function() {
//   init();
//   $('#searchBtn').click(searchfunction);
// });

searchBtn.addEventListener("click", searchFunction);

function searchFunction(){
  if(!movieTitle.value){
    $('.ui.basic.modal').modal('show');
    year.value = "";
    return searchFunction;
  } else if (!year.value || isNaN(year.value)){
    $('.ui.basic.modal').modal('show');
    movieTitle.value = "";
    return searchFunction;
  } else {
    movieTitle = movieTitle.value.replaceAll(" ", "+");

    year = year.value;
    episode = episode.value;
    season = season.value;
    callOmbdAPI(movieTitle, year, episode, season);
  }
}

function callOmbdAPI(movieTitle, year, episode, season){
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