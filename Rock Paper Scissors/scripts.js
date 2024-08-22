document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".score-number").innerHTML = 0;
  score = 0;
});


function getRandomImageClass() {
  let imagesClasses = [".paper-icon", ".scissors-icon", ".rock-icon"];
  let randomNumber = Math.floor(Math.random() * imagesClasses.length);
  return imagesClasses[randomNumber];
}

let score = 0;

// alles hide
function hideAllClasses() {
  document.querySelector(".paper-icon").style.display = "none";
  document.querySelector(".scissors-icon").style.display = "none";
  document.querySelector(".rock-icon").style.display = "none";
}
function showAllClasses() {
  document.querySelector(".paper-icon").style.display = "block";
  document.querySelector(".scissors-icon").style.display = "block";
  document.querySelector(".rock-icon").style.display = "block";
}


function showClasses(playerClass, computerClass) {
  hideAllClasses();
  document.querySelector(".choose").style.display = "flex";
  document.querySelector(".choose").style.justifyContent = "space-between";
  document.querySelector(".icons").style.justifyContent = "space-between";
  document.querySelector(playerClass).style.display = "block";
  document.querySelector(computerClass).style.display = "block";

  setTimeout(showAllClasses, 2000);
}

document.querySelector(".paper-icon").addEventListener("click", function () {
  let randomImageClass = getRandomImageClass();
  showClasses(".paper-icon", randomImageClass);
  if (randomImageClass === ".scissors-icon") {
    document.querySelector(".result").innerHTML = "YOU LOSE";
  } else if (randomImageClass === ".rock-icon") {
    document.querySelector(".result").innerHTML = "YOU WIN";
    score++;
  } else if (randomImageClass === ".paper-icon") {
    document.querySelector(".result").innerHTML = "DRAW";
  }
  document.querySelector(".score-number").innerHTML = score; // Update score in DOM
});

document.querySelector(".scissors-icon").addEventListener("click", function () {
  let randomImageClass = getRandomImageClass();
  showClasses(".scissors-icon", randomImageClass);
  if (randomImageClass === ".paper-icon") {
    document.querySelector(".result").innerHTML = "YOU WIN";
    score++;
  } else if (randomImageClass === ".rock-icon") {
    document.querySelector(".result").innerHTML = "YOU LOSE";
  } else if (randomImageClass === ".scissors-icon") {
    document.querySelector(".result").innerHTML = "DRAW";
  }
  document.querySelector(".score-number").innerHTML = score; // Update score in DOM
});

document.querySelector(".rock-icon").addEventListener("click", function () {
  let randomImageClass = getRandomImageClass();
  showClasses(".rock-icon", randomImageClass);
  if (randomImageClass === ".scissors-icon") {
    document.querySelector(".result").innerHTML = "YOU WIN";
    score++;
  } else if (randomImageClass === ".paper-icon") {
    document.querySelector(".result").innerHTML = "YOU LOSE";
  } else if (randomImageClass === ".rock-icon") {
    document.querySelector(".result").innerHTML = "DRAW";
  }
  document.querySelector(".score-number").innerHTML = score; // Update score in DOM
});
