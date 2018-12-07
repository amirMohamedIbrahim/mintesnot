var abc = document.querySelector("#submit");

  abc.addEventListener("click",(function (e) {
    e.preventDefault();
    var user = document.querySelector("#firstname");
    var pass = document.querySelector("#username");
    var username = user;
    var password = pass;
     if (username == user && password == pass){
        window.location.replace("ProjectionLion.html");
     }
    }))




    