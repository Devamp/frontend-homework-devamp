const input = document.getElementById("userInput");
const textContainer = document.getElementById("textContainer");

const handleInput = (event) => {
  const userInput = input.value.trim().toLowerCase();
  const text = textContainer.textContent;

  /**
   * Helpful outside source:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
   *
   * split the text into an array at word boundries, where each element in the array is a word or a special character but not both
   */
  const words = text.split(/\b/);

  // new text array of highlighted and regular words
  let newText = [];

  // loop each word, if word matches user input, apply the highlight class within a span element and add to newText words array. Otherwise, push the original word.
  words.forEach((word) => {
    if (word.toLowerCase() === userInput) {
      newText.push(`<span class="highlight">${word}</span>`);
    } else {
      newText.push(word);
    }
  });

  // join the new array of highlited words together and set as the new inner HTML of the text container
  textContainer.innerHTML = newText.join("");
};

// press enter to trigger highlighting event
input.addEventListener("keyup", handleInput);
