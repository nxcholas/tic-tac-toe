let xoCounter = 0;
let xoState = "o";

let playerOneSpan = document.getElementById("playerOneName");
let playerTwoSpan = document.getElementById("playerTwoName");
let winScreen = document.getElementById("heading-text");
let playerOneName;
let playerTwoName;
let whoWins = document.getElementById("winner-name");
let winnerName;

const gridZero = document.querySelector(".grid[data-num='0']");
const gridOne = document.querySelector(".grid[data-num='1']");
const gridTwo = document.querySelector(".grid[data-num='2']");
const gridThree = document.querySelector(".grid[data-num='3']");
const gridFour = document.querySelector(".grid[data-num='4']");
const gridFive = document.querySelector(".grid[data-num='5']");
const gridSix = document.querySelector(".grid[data-num='6']");
const gridSeven = document.querySelector(".grid[data-num='7']");
const gridEight = document.querySelector(".grid[data-num='8']");

let zeroO = document.querySelector(".grid[data-num='0'] .child:nth-child(1)");
let zeroX = document.querySelector(".grid[data-num='0'] .child:nth-child(2)");
let oneO = document.querySelector(".grid[data-num='1'] .child:nth-child(1)");
let oneX = document.querySelector(".grid[data-num='1'] .child:nth-child(2)");
let twoO = document.querySelector(".grid[data-num='2'] .child:nth-child(1)");
let twoX = document.querySelector(".grid[data-num='2'] .child:nth-child(2)");
let threeO = document.querySelector(".grid[data-num='3'] .child:nth-child(1)");
let threeX = document.querySelector(".grid[data-num='3'] .child:nth-child(2)");
let fourO = document.querySelector(".grid[data-num='4'] .child:nth-child(1)");
let fourX = document.querySelector(".grid[data-num='4'] .child:nth-child(2)");
let fiveO = document.querySelector(".grid[data-num='5'] .child:nth-child(1)");
let fiveX = document.querySelector(".grid[data-num='5'] .child:nth-child(2)");
let sixO = document.querySelector(".grid[data-num='6'] .child:nth-child(1)");
let sixX = document.querySelector(".grid[data-num='6'] .child:nth-child(2)");
let sevenO = document.querySelector(".grid[data-num='7'] .child:nth-child(1)");
let sevenX = document.querySelector(".grid[data-num='7'] .child:nth-child(2)");
let eightO = document.querySelector(".grid[data-num='8'] .child:nth-child(1)");
let eightX = document.querySelector(".grid[data-num='8'] .child:nth-child(2)");

let a1 = gridZero;
let a2 = gridOne;
let a3 = gridTwo;
let b1 = gridThree;
let b2 = gridFour;
let b3 = gridFive;
let c1 = gridSix;
let c2 = gridSeven;
let c3 = gridEight;

function changeXorO() {
  // if counter = 0, update 'O' and +1 to counter
  // if counter = 1, update 'X' and -1 to counter\

  function updateGridZero() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      xoCounter++;
      xoState = "x";
      gridZero.dataset.property = "o";
      updateWinStateZero();
      removeHoverEffectZero();
      gridZero.removeEventListener("mouseenter", addHoverEffectZero);
      gridZero.removeEventListener("mouseleave", removeHoverEffectZero);
      gridZero.removeEventListener("click", updateGridZero);
      zeroO.style.visibility = "visible";
      zeroO.style.filter = "brightness(100%)";
      gridZero.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      xoCounter--;
      xoState = "o";
      gridZero.dataset.property = "x";
      updateWinStateZero();
      removeHoverEffectZero();
      gridZero.removeEventListener("mouseenter", addHoverEffectZero);
      gridZero.removeEventListener("mouseleave", removeHoverEffectZero);
      gridZero.removeEventListener("click", updateGridZero);
      zeroX.style.visibility = "visible";
      zeroX.style.filter = "brightness(100%)";
      gridZero.classList.add("hover-effect");
    }
  }

  function updateGridOne() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      oneO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridOne.dataset.property = "o";
      updateWinStateOne();
      removeHoverEffectOne();
      gridOne.removeEventListener("mouseenter", addHoverEffectOne);
      gridOne.removeEventListener("mouseleave", removeHoverEffectOne);
      gridOne.removeEventListener("click", updateGridOne);
      oneO.style.visibility = "visible";
      oneO.style.filter = "brightness(100%)";
      gridOne.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      oneX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridOne.dataset.property = "x";
      updateWinStateOne();
      removeHoverEffectOne();
      gridOne.removeEventListener("mouseenter", addHoverEffectOne);
      gridOne.removeEventListener("mouseleave", removeHoverEffectOne);
      gridOne.removeEventListener("click", updateGridOne);
      oneX.style.visibility = "visible";
      oneX.style.filter = "brightness(100%)";
      gridOne.classList.add("hover-effect");
    }
  }

  function updateGridTwo() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      twoO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridTwo.dataset.property = "o";
      updateWinStateTwo();
      removeHoverEffectTwo();
      gridTwo.removeEventListener("mouseenter", addHoverEffectTwo);
      gridTwo.removeEventListener("mouseleave", removeHoverEffectTwo);
      gridTwo.removeEventListener("click", updateGridTwo);
      twoO.style.visibility = "visible";
      twoO.style.filter = "brightness(100%)";
      gridTwo.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      twoX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridTwo.dataset.property = "x";
      updateWinStateTwo();
      removeHoverEffectTwo();
      gridTwo.removeEventListener("mouseenter", addHoverEffectTwo);
      gridTwo.removeEventListener("mouseleave", removeHoverEffectTwo);
      gridTwo.removeEventListener("click", updateGridTwo);
      twoX.style.visibility = "visible";
      twoX.style.filter = "brightness(100%)";
      gridTwo.classList.add("hover-effect");
    }
  }

  function updateGridThree() {
    playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
    if (xoCounter === 0 && xoState === "o") {
      threeO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridThree.dataset.property = "o";
      updateWinStateThree();
      removeHoverEffectThree();
      gridThree.removeEventListener("mouseenter", addHoverEffectThree);
      gridThree.removeEventListener("mouseleave", removeHoverEffectThree);
      gridThree.removeEventListener("click", updateGridThree);
      threeO.style.visibility = "visible";
      threeO.style.filter = "brightness(100%)";
      gridThree.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      threeX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridThree.dataset.property = "x";
      updateWinStateThree();
      removeHoverEffectThree();
      gridThree.removeEventListener("mouseenter", addHoverEffectThree);
      gridThree.removeEventListener("mouseleave", removeHoverEffectThree);
      gridThree.removeEventListener("click", updateGridThree);
      threeX.style.visibility = "visible";
      threeX.style.filter = "brightness(100%)";
      gridThree.classList.add("hover-effect");
    }
  }

  function updateGridFour() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      fourO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridFour.dataset.property = "o";
      updateWinStateFour();
      removeHoverEffectFour();
      gridFour.removeEventListener("mouseenter", addHoverEffectFour);
      gridFour.removeEventListener("mouseleave", removeHoverEffectFour);
      gridFour.removeEventListener("click", updateGridFour);
      fourO.style.visibility = "visible";
      fourO.style.filter = "brightness(100%)";
      gridFour.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      fourX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridFour.dataset.property = "x";
      updateWinStateFour();
      removeHoverEffectFour();
      gridFour.removeEventListener("mouseenter", addHoverEffectFour);
      gridFour.removeEventListener("mouseleave", removeHoverEffectFour);
      gridFour.removeEventListener("click", updateGridFour);
      fourX.style.visibility = "visible";
      fourX.style.filter = "brightness(100%)";
      gridFour.classList.add("hover-effect");
    }
  }

  function updateGridFive() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      fiveO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridFive.dataset.property = "o";
      updateWinStateFive();
      removeHoverEffectFive();
      gridFive.removeEventListener("mouseenter", addHoverEffectFive);
      gridFive.removeEventListener("mouseleave", removeHoverEffectFive);
      gridFive.removeEventListener("click", updateGridFive);
      fiveO.style.visibility = "visible";
      fiveO.style.filter = "brightness(100%)";
      gridFive.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      fiveX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridFive.dataset.property = "x";
      updateWinStateFive();
      removeHoverEffectFive();
      gridFive.removeEventListener("mouseenter", addHoverEffectFive);
      gridFive.removeEventListener("mouseleave", removeHoverEffectFive);
      gridFive.removeEventListener("click", updateGridFive);
      fiveX.style.visibility = "visible";
      fiveX.style.filter = "brightness(100%)";
      gridFive.classList.add("hover-effect");
    }
  }

  function updateGridSix() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      sixO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridSix.dataset.property = "o";
      updateWinStateSix();
      removeHoverEffectSix();
      gridSix.removeEventListener("mouseenter", addHoverEffectSix);
      gridSix.removeEventListener("mouseleave", removeHoverEffectSix);
      gridSix.removeEventListener("click", updateGridSix);
      sixO.style.visibility = "visible";
      sixO.style.filter = "brightness(100%)";
      gridSix.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      sixX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridSix.dataset.property = "x";
      updateWinStateSix();
      removeHoverEffectSix();
      gridSix.removeEventListener("mouseenter", addHoverEffectSix);
      gridSix.removeEventListener("mouseleave", removeHoverEffectSix);
      gridSix.removeEventListener("click", updateGridSix);
      sixX.style.visibility = "visible";
      sixX.style.filter = "brightness(100%)";
      gridSix.classList.add("hover-effect");
    }
  }

  function updateGridSeven() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      sevenO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridSeven.dataset.property = "o";
      updateWinStateSeven();
      removeHoverEffectSeven();
      gridSeven.removeEventListener("mouseenter", addHoverEffectSeven);
      gridSeven.removeEventListener("mouseleave", removeHoverEffectSeven);
      gridSeven.removeEventListener("click", updateGridSeven);
      sevenO.style.visibility = "visible";
      sevenO.style.filter = "brightness(100%)";
      gridSeven.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      sevenX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridSeven.dataset.property = "x";
      updateWinStateSeven();
      removeHoverEffectSeven();
      gridSeven.removeEventListener("mouseenter", addHoverEffectSeven);
      gridSeven.removeEventListener("mouseleave", removeHoverEffectSeven);
      gridSeven.removeEventListener("click", updateGridSeven);
      sevenX.style.visibility = "visible";
      sevenX.style.filter = "brightness(100%)";
      gridSeven.classList.add("hover-effect");
    }
  }

  function updateGridEight() {
    if (xoCounter === 0 && xoState === "o") {
        playerOneSpan.style.color = "#393d46";
        playerTwoSpan.style.color = "orchid";
      eightO.style.visibility = "visible";
      xoCounter++;
      xoState = "x";
      gridEight.dataset.property = "o";
      updateWinStateEight();
      removeHoverEffectEight();
      gridEight.removeEventListener("mouseenter", addHoverEffectEight);
      gridEight.removeEventListener("mouseleave", removeHoverEffectEight);
      gridEight.removeEventListener("click", updateGridEight);
      eightO.style.visibility = "visible";
      eightO.style.filter = "brightness(100%)";
      gridEight.classList.add("hover-effect");
    } else if (xoCounter === 1 && xoState === "x") {
        playerOneSpan.style.color = "orchid";
        playerTwoSpan.style.color = "#393d46";
      eightX.style.visibility = "visible";
      xoCounter--;
      xoState = "o";
      gridEight.dataset.property = "x";
      updateWinStateEight();
      removeHoverEffectEight();
      gridEight.removeEventListener("mouseenter", addHoverEffectEight);
      gridEight.removeEventListener("mouseleave", removeHoverEffectEight);
      gridEight.removeEventListener("click", updateGridEight);
      eightX.style.visibility = "visible";
      eightX.style.filter = "brightness(100%)";
      gridEight.classList.add("hover-effect");
    }
  }

  function updateWinStateZero() {
    a1 = true;
    console.log(a1);
    checkWin();
  }

  function updateWinStateOne() {
    a2 = true;
    console.log(a2);
    checkWin();
  }

  function updateWinStateTwo() {
    a3 = true;
    console.log(a3);
    checkWin();
  }

  function updateWinStateThree() {
    b1 = true;
    console.log(b1);
    checkWin();
  }

  function updateWinStateFour() {
    b2 = true;
    console.log(b2);
    checkWin();
  }

  function updateWinStateFive() {
    b3 = true;
    console.log(b3);
    checkWin();
  }

  function updateWinStateSix() {
    c1 = true;
    console.log(c1);
    checkWin();
  }

  function updateWinStateSeven() {
    c2 = true;
    console.log(c2);
    checkWin();
  }

  function updateWinStateEight() {
    c3 = true;
    console.log(c3);
    checkWin();
  }

  function checkWin() {
    //horizontal
    if (
      a1 === true &&
      a2 === true &&
      a3 === true &&
      gridZero.dataset.property === "o" &&
      gridOne.dataset.property === "o" &&
      gridTwo.dataset.property === "o"
    ) {
      console.log("row 1 O win");
      console.log(a1, a2, a3);
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a1 === true &&
      a2 === true &&
      a3 === true &&
      gridZero.dataset.property === "x" &&
      gridOne.dataset.property === "x" &&
      gridTwo.dataset.property === "x"
    ) {
      console.log("row 1 X win");
      console.log(a1, a2, a3);
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
    if (
      b1 === true &&
      b2 === true &&
      b3 === true &&
      gridThree.dataset.property === "o" &&
      gridFour.dataset.property === "o" &&
      gridFive.dataset.property === "o"
    ) {
      console.log("row 2 O win");
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      b1 === true &&
      b2 === true &&
      b3 === true &&
      gridThree.dataset.property === "x" &&
      gridFour.dataset.property === "x" &&
      gridFive.dataset.property === "x"
    ) {
      console.log("row 2 X win");
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
    if (
      c1 === true &&
      c2 === true &&
      c3 === true &&
      gridSix.dataset.property === "o" &&
      gridSeven.dataset.property === "o" &&
      gridEight.dataset.property === "o"
    ) {
      console.log("row 3 o win");
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      c1 === true &&
      c2 === true &&
      c3 === true &&
      gridSix.dataset.property === "x" &&
      gridSeven.dataset.property === "x" &&
      gridEight.dataset.property === "x"
    ) {
      console.log("row 3 x win");
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
    // vertical
    if (
      a1 === true &&
      b1 === true &&
      c1 === true &&
      gridZero.dataset.property === "o" &&
      gridThree.dataset.property === "o" &&
      gridSix.dataset.property === "o"
    ) {
      console.log("column 1 o win");
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a1 === true &&
      b1 === true &&
      c1 === true &&
      gridZero.dataset.property === "x" &&
      gridThree.dataset.property === "x" &&
      gridSix.dataset.property === "x"
    ) {
      console.log("column 1 x win");
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a2 === true &&
      b2 === true &&
      c2 === true &&
      gridOne.dataset.property === "o" &&
      gridFour.dataset.property === "o" &&
      gridSeven.dataset.property === "o"
    ) {
      console.log("column 2 o win");
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a2 === true &&
      b2 === true &&
      c2 === true &&
      gridOne.dataset.property === "x" &&
      gridFour.dataset.property === "x" &&
      gridSeven.dataset.property === "x"
    ) {
      console.log("column 2 x win");
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a3 === true &&
      b3 === true &&
      c3 === true &&
      gridTwo.dataset.property === "o" &&
      gridFive.dataset.property === "o" &&
      gridEight.dataset.property === "o"
    ) {
      console.log("column 3 o win");
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a3 === true &&
      b3 === true &&
      c3 === true &&
      gridTwo.dataset.property === "x" &&
      gridFive.dataset.property === "x" &&
      gridEight.dataset.property === "x"
    ) {
      console.log("column 3 x win");
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
    // diagonal
    if (
      a1 === true &&
      b2 === true &&
      c3 === true &&
      gridZero.dataset.property === "o" &&
      gridFour.dataset.property === "o" &&
      gridEight.dataset.property === "o"
    ) {
      console.log("diag 1 o win");
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a1 === true &&
      b2 === true &&
      c3 === true &&
      gridZero.dataset.property === "x" &&
      gridFour.dataset.property === "x" &&
      gridEight.dataset.property === "x"
    ) {
      console.log("diag 1 x win");
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a3 === true &&
      b2 === true &&
      c1 === true &&
      gridTwo.dataset.property === "o" &&
      gridFour.dataset.property === "o" &&
      gridSix.dataset.property === "o"
    ) {
      console.log("diag 2 o win");
      winScreen.style.visibility = "visible";
      winnerName = playerOneName;
      whoWins.textContent = winnerName;
    } //good
    if (
      a3 === true &&
      b2 === true &&
      c1 === true &&
      gridTwo.dataset.property === "x" &&
      gridFour.dataset.property === "x" &&
      gridSix.dataset.property === "x"
    ) {
      console.log("diag 2 x win");
      winScreen.style.visibility = "visible";
      winnerName = playerTwoName;
      whoWins.textContent = winnerName;
    } //good
  }

  //  Hover Effects
  function addHoverEffectZero() {
    gridZero.classList.add("hover-effect");
    if (xoState === "o") {
      zeroO.style.visibility = "visible";
      zeroO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      zeroX.style.visibility = "visible";
      zeroX.style.filter = "brightness(40%)";
    }
  }
  function removeHoverEffectZero() {
    gridZero.classList.remove("hover-effect");
    if (xoState === "o") {
      zeroO.style.visibility = "hidden";
    } else if (xoState === "x") {
      zeroX.style.visibility = "hidden";
    }
  }

  function addHoverEffectOne() {
    gridOne.classList.add("hover-effect");
    if (xoState === "o") {
      oneO.style.visibility = "visible";
      oneO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      oneX.style.visibility = "visible";
      oneX.style.filter = "brightness(40%)";
    }
  }
  function removeHoverEffectOne() {
    gridOne.classList.remove("hover-effect");
    if (xoState === "o") {
      oneO.style.visibility = "hidden";
    } else if (xoState === "x") {
      oneX.style.visibility = "hidden";
    }
  }

  function addHoverEffectTwo() {
    gridTwo.classList.add("hover-effect");
    if (xoState === "o") {
      twoO.style.visibility = "visible";
      twoO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      twoX.style.visibility = "visible";
      twoX.style.filter = "brightness(40%)";
    }
  }

  function removeHoverEffectTwo() {
    gridTwo.classList.remove("hover-effect");
    if (xoState === "o") {
      twoO.style.visibility = "hidden";
    } else if (xoState === "x") {
      twoX.style.visibility = "hidden";
    }
  }

  function addHoverEffectThree() {
    gridThree.classList.add("hover-effect");
    if (xoState === "o") {
      threeO.style.visibility = "visible";
      threeO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      threeX.style.visibility = "visible";
      threeX.style.filter = "brightness(40%)";
    }
  }

  function removeHoverEffectThree() {
    gridThree.classList.remove("hover-effect");
    if (xoState === "o") {
      threeO.style.visibility = "hidden";
    } else if (xoState === "x") {
      threeX.style.visibility = "hidden";
    }
  }

  function addHoverEffectFour() {
    gridFour.classList.add("hover-effect");
    if (xoState === "o") {
      fourO.style.visibility = "visible";
      fourO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      fourX.style.visibility = "visible";
      fourX.style.filter = "brightness(40%)";
    }
  }

  function removeHoverEffectFour() {
    gridFour.classList.remove("hover-effect");
    if (xoState === "o") {
      fourO.style.visibility = "hidden";
    } else if (xoState === "x") {
      fourX.style.visibility = "hidden";
    }
  }

  function addHoverEffectFive() {
    gridFive.classList.add("hover-effect");
    if (xoState === "o") {
      fiveO.style.visibility = "visible";
      fiveO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      fiveX.style.visibility = "visible";
      fiveX.style.filter = "brightness(40%)";
    }
  }

  function removeHoverEffectFive() {
    gridFive.classList.remove("hover-effect");
    if (xoState === "o") {
      fiveO.style.visibility = "hidden";
    } else if (xoState === "x") {
      fiveX.style.visibility = "hidden";
    }
  }

  function addHoverEffectSix() {
    gridSix.classList.add("hover-effect");
    if (xoState === "o") {
      sixO.style.visibility = "visible";
      sixO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      sixX.style.visibility = "visible";
      sixX.style.filter = "brightness(40%)";
    }
  }

  function removeHoverEffectSix() {
    gridSix.classList.remove("hover-effect");
    if (xoState === "o") {
      sixO.style.visibility = "hidden";
    } else if (xoState === "x") {
      sixX.style.visibility = "hidden";
    }
  }

  function addHoverEffectSeven() {
    gridSeven.classList.add("hover-effect");
    if (xoState === "o") {
      sevenO.style.visibility = "visible";
      sevenO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      sevenX.style.visibility = "visible";
      sevenX.style.filter = "brightness(40%)";
    }
  }

  function removeHoverEffectSeven() {
    gridSeven.classList.remove("hover-effect");
    if (xoState === "o") {
      sevenO.style.visibility = "hidden";
    } else if (xoState === "x") {
      sevenX.style.visibility = "hidden";
    }
  }

  function addHoverEffectEight() {
    gridEight.classList.add("hover-effect");
    if (xoState === "o") {
      eightO.style.visibility = "visible";
      eightO.style.filter = "brightness(40%)";
    } else if (xoState === "x") {
      eightX.style.visibility = "visible";
      eightX.style.filter = "brightness(40%)";
    }
  }

  function removeHoverEffectEight() {
    gridEight.classList.remove("hover-effect");
    if (xoState === "o") {
      eightO.style.visibility = "hidden";
    } else if (xoState === "x") {
      eightX.style.visibility = "hidden";
    }
  }

  gridZero.addEventListener("click", updateGridZero);
  gridZero.addEventListener("mouseenter", addHoverEffectZero);
  gridZero.addEventListener("mouseleave", removeHoverEffectZero);

  gridOne.addEventListener("click", updateGridOne);
  gridOne.addEventListener("mouseenter", addHoverEffectOne);
  gridOne.addEventListener("mouseleave", removeHoverEffectOne);

  gridTwo.addEventListener("click", updateGridTwo);
  gridTwo.addEventListener("mouseenter", addHoverEffectTwo);
  gridTwo.addEventListener("mouseleave", removeHoverEffectTwo);

  gridThree.addEventListener("click", updateGridThree);
  gridThree.addEventListener("mouseenter", addHoverEffectThree);
  gridThree.addEventListener("mouseleave", removeHoverEffectThree);

  gridFour.addEventListener("click", updateGridFour);
  gridFour.addEventListener("mouseenter", addHoverEffectFour);
  gridFour.addEventListener("mouseleave", removeHoverEffectFour);

  gridFive.addEventListener("click", updateGridFive);
  gridFive.addEventListener("mouseenter", addHoverEffectFive);
  gridFive.addEventListener("mouseleave", removeHoverEffectFive);

  gridSix.addEventListener("click", updateGridSix);
  gridSix.addEventListener("mouseenter", addHoverEffectSix);
  gridSix.addEventListener("mouseleave", removeHoverEffectSix);

  gridSeven.addEventListener("click", updateGridSeven);
  gridSeven.addEventListener("mouseenter", addHoverEffectSeven);
  gridSeven.addEventListener("mouseleave", removeHoverEffectSeven);

  gridEight.addEventListener("click", updateGridEight);
  gridEight.addEventListener("mouseenter", addHoverEffectEight);
  gridEight.addEventListener("mouseleave", removeHoverEffectEight);
}

function storePlayerName () {
    const inputNameOne = document.getElementById("playerOne").value;
    const inputNameTwo = document.getElementById("playerTwo").value;

    playerOneName = inputNameOne;
    playerTwoName = inputNameTwo;

    playerOneSpan.textContent = inputNameOne;
    playerTwoSpan.textContent = inputNameTwo;
    changeXorO();
}

function resetPage() {
    location.reload();
    console.log(xoCounter,xoState);
    changeXorO();
}