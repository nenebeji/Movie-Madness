// function callOmbdAPI(movieTitle, SeasonNumber){ //trial for the Ombd API 
//     console.debug("call 1st API");
//     // get all parameter and combined it into the search link
//     var testingURL ="https://www.omdbapi.com/?t="+"Game%20of%20Thrones"/*movie title*/+"&Season=1&Episode=1&apikey=9abdf83f";
//     console.debug(testingURL);

//     fetch(testingURL)
//     .then(function (response) {
//       if (!response.ok) {
//         console.debug(response);
//         throw response.json();
//       }
//       return response.json();
//     })
//     .then(function (data) {
//         console.debug(data);
//       if(data.length === 0 ){
//         console.debug("No data");       //No data found so should show modal window 
//       }
//       else{                            
//          //should store the data detail to local storage 
//         //callYoutubeAPI();  //Call next API function 

//       }
//     })
//     .catch(function (error) {
//       console.error(error);

        
//     });

    
  
  
//   }