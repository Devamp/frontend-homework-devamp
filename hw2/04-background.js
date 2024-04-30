document.addEventListener("DOMContentLoaded", () => {
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
    backgroundElement.style.backgroundColor = `rgba(${R}, ${G}, ${B}, 0.4)`;
  };

  // get most recent interval time and set interval for color change. Returns the interval id
  const beginColorChange = (intervalTime) => {
    // do some error checking, if interval exceeds max 32bit signed int, set it to default value of 3
    if (
      isNaN(intervalTime) ||
      intervalTime === "" ||
      intervalTime <= 0 ||
      intervalTime > Math.pow(2, 31) - 1
    ) {
      // set default value to 3 second
      document.getElementById("intervalInput").value = 3;
      intervalTime = 3;
    }

    return setInterval(changeColor, intervalTime * 1000);
  };

  // main event handler upon button click
  const handleClick = () => {
    // update the button UI and status
    let active = updateButton();
    let intervalTime = parseInt(document.getElementById("intervalInput").value);

    // first start was pressed, begin color change. Otherwise, clear the interval.
    if (active) {
      intervalID = beginColorChange(intervalTime);
    } else {
      clearInterval(intervalID);
    }
  };

  /**
   * Upon initial load do the following:
   *   - Update the button to reflect the process has started
   *   - Change background color to a random color
   *   - Begin changing the background color every 3 seconds (as required by the assignment) and set input value to reflect 3 seconds
   */
  updateButton();
  changeColor();
  intervalID = beginColorChange(3);
  document.getElementById("intervalInput").value = 3;

  // listen for clicks on the button
  startButton.addEventListener("click", handleClick);
});
