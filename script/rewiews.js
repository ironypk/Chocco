///Slide Show

let rewiewControls = document.querySelectorAll(".rewiew-controls__item"),
  rewiewControlsLength = rewiewControls.length;

let rewiew = document.querySelectorAll(".rewiew__item"),
  rewiewLength = rewiew.length;



let currentSlide = 0;

let intervalSlide = setInterval(function() {
  rewiewShow((currentSlide += 1));
}, 5000);


//Прокрута rewiew

function rewiewShow(n) {
  if (n == rewiewLength) {
    currentSlide = 0;
  }
  activeSlide(currentSlide);
}

//rewiew-controls
for (let i = 0; i < rewiewControlsLength; i++) {
  rewiewControls[i].setAttribute("data-index", i);
  rewiewControls[i].addEventListener("click", function() {
    let index = this.getAttribute("data-index");

    activeSlide(index);

    currentSlide = parseInt(index);

    return currentSlide;
  });
}


//Добавление активных классов на rewiew и rewiew-controls
function activeSlide(p) {
    for (let i = 0; i < rewiewLength; i++) {
      rewiew[i].classList.remove("rewiew__item--active");
      rewiew[p].classList.add("rewiew__item--active");
    }
  
    for (let i = 0; i < rewiewControlsLength; i++) {
      rewiewControls[i].classList.remove("rewiew-controls--active");
      rewiewControls[p].classList.add("rewiew-controls--active");
    }
  }

////pause Доработать

// let rewiewControlList = document.querySelector('.rewiew-controls');

// rewiewControlList.addEventListener("mouseenter", () => {
//     clearInterval(intervalSlide);
//   });
