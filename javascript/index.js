window.onscroll = function () {
  headerFunction();
};

function headerFunction() {
  if (
    document.body.scrollTop > 550 ||
    document.documentElement.scrollTop > 550
  ) {
    document.getElementById("headerID").className = "header-white";
    document.getElementById("header-link").style.color = "rgb(40, 27, 54)";
    document.getElementById("header-link2").style.color = "rgb(40, 27, 54)";
    document.getElementById("apply-cta").className = "apply-loan2";
  } else {
    document.getElementById("headerID").className = "header-transparent";
    document.getElementById("header-link").style.color = "#ececec";
    document.getElementById("header-link2").style.color = "#ececec";
    document.getElementById("apply-cta").className = "apply-loan";
  }
}

// function subpageHeader() {
//   console.log("haha");
//   document.getElementById("header-link").style.color = "rgb(40,27,54)";
//   document.getElementById("header-link2").style.color = "rgb(40,27,54)";
// }
