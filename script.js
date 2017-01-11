/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/

function greetMe(name) {
  var today = new Date();
  alert("Hello " + name + ", today is " + today.toDateString());
}


//greetMe("World");

/*
function myFunction() {
  //alert('Helow!');
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} */

//myFunction();

// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;


function carousel() {
 // alert("hellow");
  var i;
  var x = document.getElementsByClassName("mySlides");
  //alert("hellow"+x);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    //alert("hellow inside for");
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel,3000);
}

//carousel();

