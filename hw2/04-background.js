// declare startButton element and global intervalID variable
const startButton = document.getElementById("startButton");
let intervalID;

// update the button UI/status depending on the current status
const updateButton = () => {
  const currentButton = document.getElementById("startButton");

  if (currentButton.innerText === "Start") {
    currentButton.className = "btn btn-danger";
    currentButton.innerText = "Stop";
    return true;
  } else {
    currentButton.className = "btn btn-primary";
    currentButton.innerText = "Start";
    return false;
  }
};

/**
 * Function source code taken from here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// when called, change the background of the body element to a random color using RGBA values.
const changeColor = () => {
  const backgroundElement = document.getElementById("body");

  let R = getRandomInt(256);
  let G = getRandomInt(256);
  let B = getRandomInt(256);

  // use the RGB values from above with alpha value of 0.3 to set new background
  backgroundElement.style.backgroundColor = `rgba(${R}, ${G}, ${B}, 0.3)`;
};

// get most recent interval time and set interval for color change. Returns the interval id
const beginColorChange = () => {
  let intervalTime = document.getElementById("intervalInput").value;

  // do some error checking
  if (isNaN(intervalTime) || intervalTime === "" || intervalTime < 0) {
    // set default value to 1 second
    document.getElementById("intervalInput").value = 1;
    intervalTime = 1;
  }

  return setInterval(changeColor, intervalTime * 1000);
};

// main event handler upon button click
const handleClick = () => {
  // update the button UI and status
  let active = updateButton();

  // first start was pressed, begin color change. Otherwise, clear the interval.
  if (active) {
    intervalID = beginColorChange();
  } else {
    clearInterval(intervalID);
  }
};

startButton.addEventListener("click", handleClick);
