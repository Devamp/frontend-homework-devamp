import { characters } from "./02-data.js";

// get our elements from webpage
const searchButton = document.getElementById("searchButton");
const characterContainer = document.getElementById("characterContainer");
const userInput = document.getElementById("userInput");

// given the searchString, return all matching characters from the 'characters' dataset
const getMatchingCharacters = (searchString) => {
  const charactersToReturn = [];

  characters.forEach((character) => {
    if (character.name.includes(searchString)) {
      charactersToReturn.push(character);
    }
  });

  return charactersToReturn;
};

// create and return the card for given character, use search string to highlight the keyword
const createCharacterCard = (character, searchString) => {
  const card = document.createElement("div");
  card.classList.add("card", "border-secondary");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");

  // replace regular name with highlighted character name to match search string
  const highlightedName = character.name.replace(
    new RegExp(searchString, "gi"),
    (match) => `<span class="highlight">${match}</span>`
  );

  cardTitle.innerHTML = highlightedName;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = `Birth year: ${character.birth_year}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  return card;
};

// creates and displays the cards for each of the matching characters
const displayCards = (matchingCharacters, searchString) => {
  matchingCharacters.forEach((character) => {
    const card = createCharacterCard(character, searchString);
    characterContainer.appendChild(card);
  });
};

// creates and displays a error message card incase the search string does not exist in the data set
const displayNoCardsFound = () => {
  const card = document.createElement("div");
  card.classList.add("card", "border-secondary");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = "SORRY!";

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = `Could not find a matching character with that name.`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  characterContainer.appendChild(card);
};

// main event handler upoin button
const handleClick = () => {
  // first remove any existing results displayed
  clearSearch();

  // get the current search string and find all matching characters from the data set
  const searchString = document.getElementById("userInput").value;

  // return matching cards if search string is not empty
  if (searchString !== "") {
    const matchingCharacters = getMatchingCharacters(searchString);

    // if there are matching characters, display their cards. Otherwise, display a "No Cards Found" card
    if (matchingCharacters.length > 0) {
      // the results will be displayed on the page indefinitely until the user searches new result
      displayCards(matchingCharacters, searchString);
    } else {
      displayNoCardsFound();
    }
  }
};

//  clear any cards being displayed in the container
const clearSearch = () => {
  if (characterContainer.children.length > 0) {
    characterContainer.innerHTML = "";
  }
};

// link click event to the search button
searchButton.addEventListener("click", handleClick);

// clear the search results once the user clicks on the search bar again and starts typing
userInput.addEventListener("input", clearSearch);
