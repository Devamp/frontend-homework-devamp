// function to check if num in a palindrome or not
const isPalindrome = (num) => {
  // convert num to string for indexing
  var numString = num.toString();

  // left pointer
  var left = 0;

  // right pointer starting at end of num
  var right = numString.length - 1;

  // left and right pointers both iterate towards each other while checking each character of num
  while (left <= right) {
    if (numString[left] == numString[right]) {
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
  // convert string to int
  const num = parseInt(document.getElementById("userInput").value);

  // get the result element to display the message
  const resultText = document.getElementById("resultText");

  if (isNaN(num) || num < 0) {
    // check if value is invalid or not a number
    resultText.textContent = "Invalid Input. Please enter a positive integer.";
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
