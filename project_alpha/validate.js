
function removeMessage() {
  var errorinput=document.querySelectorAll(".wrong input");
  [].forEach.call(errorinput, function(el){
 el.classList.remove("wrong-input");
  });

  var errorpara=document.querySelectorAll(".error")
     [].forEach.call(errorpara, function(el){
 el.innerHTML="";
  });
}

