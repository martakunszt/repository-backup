/*alert("Hello")

let =document.getElementById == "slider"("style.css")
document.getElementById('slider').onclick = function () {
    if (document.getElementById('theme').href=="dark.css"){
        document.getElementById('theme').href=='style.css';
    }
    else{
        document.getElementById('theme').href == 'dark.css';
    }
};

addEventListener("slider","dark.css")*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}