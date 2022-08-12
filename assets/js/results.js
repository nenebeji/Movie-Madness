// Need function to return to main page
var apikey = "27e13cea";

function init(){

    $("#mediaText").hide();

    var urlString=window.location.href;
    var paramString = urlString.split('?')[1];
    var params_arr = paramString.split('&');
    //location.href="./result.html/?t=" + movieTitle + "&y=" + year + "&m="+media+"&id="+ imbdId; 

    par = params_arr[0].split('=');
    movieTitle=par[1];
    par = params_arr[1].split('=');
    year= par[1];
    par = params_arr[2].split('=');
    media =par[1];
    par = params_arr[3].split('=');
    imbdId = par[1];
    
    console.debug(movieTitle, year, media, imbdId);
    
    callOmbdAPI(movieTitle, year, media, imbdId);


}


function callOmbdAPI(movieTitle, year, media, imbdId){
    var OmbdURL = "https://www.omdbapi.com/?t=" + movieTitle + "&y=" + year + "&apikey=" + apikey;
    if (media){
        callOmbdAPIMediaValidation(movieTitle, year, media);
    } else {
        fetch(OmbdURL)
    .then(function(response){
      if (response.ok){
        response.json().then(function(data){
            console.debug(data);
            if(data.Response==="True"){
                DisplayOmbdResult(data);
            }
            else DisplayNoResult();
        })
      } else DisplayNoResult();
    })
  }
    }
    

function callOmbdAPIMediaValidation(movieTitle, year, media){

    if (media == "movie" || media == "series" || media == "episode"){
        callOmbdAPIMedia(movieTitle, year, media);
    } else {
        $("#mediaText").show();
        $( "#dialogMedia" ).dialog({
            width: 400,
        });
    return;
    }
}

function callOmbdAPIMedia(){
    var OmbdURL = "https://www.omdbapi.com/?t=" + movieTitle + "&y=" + year + "&type=" + media + "&apikey=" + apikey;
    fetch(OmbdURL)
    .then(function(response){
      if (response.ok){
        response.json().then(function(data){
            console.debug(data);
            if(data.Response==="True"){
                DisplayOmbdResult(data);
            }
            else DisplayNoResult();
        })
      } else DisplayNoResult();
    })
}
  
function DisplayNoResult(){
    $('#movietitle').text("Sorry, no result found");
    $('#plot-info').text("Please return to the main page");
    $('#movieimage').attr("src","");
    $('#IMDb-rating').text("N/A");
    $('#rottenT').text("N/A");
    $('#metacritic').text("N/A");
    console.debug("no result");

}

function DisplayOmbdResult(OmbdData){


    $('#plot-info').text(OmbdData.Plot);
    console.debug(OmbdData.Plot);
    $('#movietitle').text(OmbdData.Title);
    console.debug(OmbdData.Title);
    $('#movieimage').attr("src",OmbdData.Poster);
    console.debug(OmbdData.Poster); 
    $('#IMDb-rating').text(OmbdData.imdbRating);
    console.debug(OmbdData.imdbRating);

    if (OmbdData.Metascore !==''){
        $('#metascore').text(OmbdData.Metascore);
    } else{
        $('#metascore').text("N/A");
    }

    for (i=0; i<OmbdData.Ratings.length; i++){
        if(OmbdData.Ratings[i].Source === "Rotten Tomatoes")  {
            $('#rottenT').text(OmbdData.Ratings[i].Value);
            console.debug(OmbdData.Ratings[1].Value);
            break;
        } else   $('#rottenT').text("N/A")
    }
        
    for (i=0; i<OmbdData.Ratings.length; i++){
        if(OmbdData.Ratings[i].Source === "Metacritic")  {
            $('#metacritic').text(OmbdData.Ratings[1].Value);
            console.debug(OmbdData.Ratings[1].Value);
            break;
        }
        else  $('#metacritic').text("N/A")
    }
   



}

init();