
function searchfunction(){
    //event.preventDefault();
    console.debug("Search button pressed");     

    if ($('#MovieTitle').val()===""){   //check if there is any input 
    $('.ui.basic.modal')
    .modal('show');
    }
    else {
      var movieTitle = $('#MovieTitle').val();
      var SeasonNumber=$('#SeasonNumber').val();
      console.debug(movieTitle);
      //need to clear the input field
      $('#MovieTitle').val('');

      callOmbdAPI(movieTitle,SeasonNumber); //please add other parameter when call the function, season, episode, yearofrelease, etc
          
    }
}


function init(){

}

$(function() {
  init();
  $('#serachBtn').click(searchfunction);
});

