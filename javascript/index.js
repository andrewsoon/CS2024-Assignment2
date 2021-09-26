window.onscroll = function () {
  headerFunction();
};

function headerFunction() {
  if (
    document.body.scrollTop > 550 ||
    document.documentElement.scrollTop > 550
  ) {
    document.getElementById("headerID").className = "header-white";
    document.getElementById("header-link").className = "header-nav-whiteBG";
    document.getElementById("header-link2").className = "header-nav-whiteBG";
    document.getElementById("apply-cta").className = "apply-loan-whiteBG";
  } else {
    document.getElementById("headerID").className = "header-transparent";
    document.getElementById("header-link").className = "header-nav";
    document.getElementById("header-link2").className = "header-nav";
    document.getElementById("apply-cta").className = "apply-loan";
  }
}
