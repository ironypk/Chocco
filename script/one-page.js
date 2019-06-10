document.body.style.overflow = "hidden";

let wrapper = document.querySelector(".wrapper");
let section = document.querySelectorAll(".section");

var scrollStatus = {
  wheeling: false,
  functionCall: false
};
var scrollTimer = false;

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("touchmove", function(e) {
    let sectionHeight = parseInt(getComputedStyle(this).height);
    let startPosition = window.pageYOffset;
    let distanceDown = startPosition + sectionHeight;
    let distanceUp = startPosition - sectionHeight;
    scrollStatus.wheeling = true;

    if (!scrollStatus.functionCall) {
      if (e.deltaY > 0) {
        window.scrollTo({
          top: distanceDown,
          behavior: "smooth"
        });
      }
      if (e.deltaY < 0) {
        window.scrollTo({
          top: distanceUp,
          behavior: "smooth"
        });
      }
      scrollStatus.functionCall = true;
    }

    window.clearInterval(scrollTimer);

    scrollTimer = window.setTimeout(function() {
      scrollStatus.wheeling = false;
      scrollStatus.functionCall = false;
    }, 300);
  });
}

addEventListener('to')