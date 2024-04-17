// function to check if num in a palindrome or not
const isPalindrome = (num) => {
  // convert num to string for indexing
  let numString = num.toString();

  // left pointer
  let left = 0;

  // right pointer starting at end of num
  let right = numString.length - 1;

  // left and right pointers both iterate towards each other while checking each character of num
  while (left <= right) {
    if (numString[left] === numString[right]) {
      left += 1;
      right -= 1;
    } else {
      // if characters are not the same, return false
      return false;
    }
  }

  // if we exit while loop, return true
  return true;
};

// event handler
const handleInput = () => {
  // get user response as string
  const numString = document.getElementById("userInput").value;

  // get the result element to display the message
  const resultText = document.getElementById("resultText");

  // check if response is a floating point value
  if (numString.includes(".")) {
    resultText.textContent =
      "Invalid Floating Value. Please enter a whole integer.";
    resultText.className = "text-danger";
    return;
  }

  // if reponse is empty (or text), prompt user for a valid input
  if (numString === "") {
    resultText.textContent = "Please enter a valid input!";
    resultText.className = "text-danger";
    return;
  }

  // convert response num to integer
  const num = parseInt(numString);

  // check if response is empty or not a number
  if (num < 0 || isNaN(num)) {
    resultText.textContent = "Invalid Input. Please enter a positive integer";
    resultText.className = "text-danger";
    return;
  }

  // check if num in palindrome
  const status = isPalindrome(num);

  // display status accordingly
  if (status) {
    resultText.textContent = "Yes. This is a palindrome!";
    resultText.className = "text-success";
  } else {
    resultText.textContent = "No. Try again!";
    resultText.className = "text-danger";
  }
};

// input field element
const elem = document.querySelector("input");

// create event listener on the input field
elem.addEventListener("input", handleInput);
