var body = document.getElementById("body");
var workImages = document.getElementsByClassName("work-img");
var modalContainer = document.getElementById("modalContainer");
var img = document.getElementById("modalImg");
var close = document.getElementById("close");

function modal(){
  modalContainer.style.display = "block";
  img.src = this.src;
  body.setAttribute("style", "overflow:hidden");
}
function closer(){
  modalContainer.style.display = "none";
}

window.addEventListener("load", function(){
  for (var i=0; i<workImages.length; i++){
    workImages[i].addEventListener("click",modal)
  }
  close.addEventListener("click", function(event){
    event.preventDefault();
    closer();
  });
});
