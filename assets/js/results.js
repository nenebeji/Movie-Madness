var homeBtn = document.getElementById("home-btn")



function homepage (){
    window.location.href = "./index.html";
}


homeBtn.addEventListner('click', homepage)