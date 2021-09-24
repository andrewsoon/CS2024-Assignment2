window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("headerID").className = "header-white";
    document.getElementById("header-link").style.color = "rgb(40, 27, 54)";
    document.getElementById("header-link2").style.color = "rgb(40, 27, 54)";
  } else {
    document.getElementById("headerID").className = "header-transparent";
    document.getElementById("header-link").style.color = "#ececec";
    document.getElementById("header-link2").style.color = "#ececec";
  }
}
