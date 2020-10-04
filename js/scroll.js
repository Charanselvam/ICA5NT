window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("header").className = "navbar fixed-top navbar navbar-expand-lg navbar-light bg-dark ";
  } else {
    document.getElementById("header").className = "navbar fixed-top navbar navbar-expand-lg navbar-light";
  }
}