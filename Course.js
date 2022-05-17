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
function myFunction1() {
  location.replace("http://www.dzkbw.com/books/rjb/dili/")
}
function myFunction2() {
  location.replace("http://www.dzkbw.com/books/rjb/yuwen/")
}
function myFunction3() {
  location.replace("http://www.msjxzy.com/msjx/content/msjc/")
}
function myFunction4() {
  location.replace("https://www.jd.com/hprm/171368afe25f7b304a18.html")
}
function myFunction5() {
  location.replace("http://www.dzkbw.com/books/all-shuxue/")
}
function myFunction6() {
  location.replace("http://www.dzkbw.com/books/rjb/yingyu/")
}