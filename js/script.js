//variables
let wordList = [
  "abandon",
  "adventure",
  "anchor",
  "ashore",
  "assault",
  "attack",
  "bad",
  "bandanna",
  "bandit",
  "barbaric",
  "barrel",
  "battle",
  "beach",
  "bounty",
  "brawl",
  "brutal",
  "cannon",
  "captain",
  "capture",
  "cargo",
  "cave",
  "challenge",
  "chest",
  "coast",
  "coins",
  "violent",
  "weapons",
  "compass",
  "confiscate",
  "conquest",
  "conquer",
  "contraband",
  "crew",
  "criminal",
  "crook",
  "cruel",
  "curse",
  "cutthroat",
  "dagger",
  "danger",
  "deck",
  "desert-island",
  "dishonest",
  "doubloon",
  "earring",
  "escape",
  "evil",
  "explore",
  "eye-patch",
  "fear",
  "ferocious",
  "fight",
  "first-mate",
  "flag",
  "fleet",
  "fortune",
  "gold",
  "greed",
  "gun",
  "gunpowder",
  "heist",
  "high-seas",
  "hijack",
  "hook",
  "horizon",
  "hostile",
  "hurricane",
  "illegal",
  "infamous",
  "island",
  "jewels",
  "kidnap",
  "land",
  "legend",
  "lookout",
  "loot",
  "map",
  "mates",
  "mayhem",
  "menace",
  "merchant",
  "mutiny",
  "navigate",
  "new-world",
  "notorious",
  "ocean",
  "old-world",
  "outcasts",
  "overboard",
  "parrot",
  "pegleg",
  "pirate",
  "pistol",
  "plank",
  "prowl",
  "quarters",
  "quest",
  "raid",
  "rat",
  "rations",
  "revenge",
  "riches",
  "roam",
  "robber",
  "rope",
  "ruthless",
  "sabotage",
  "sailing",
  "sailor",
  "scar",
  "scurvy",
  "seas",
  "seaweed",
  "ship",
  "shipmate",
  "shore",
  "silver",
  "thug",
  "tides",
  "torture",
  "trade",
  "treachery",
  "treasure",
  "truce",
  "skull-and-bones",
  "steal",
  "swagger",
  "swashbuckling",
  "sword",
  "thief",
  "vandalize",
  "vanquish",
  "vicious",
  "vile",
  "villain",
  "violence",
  "x-marks-the-spot",
];
let audio = document.getElementById("theme");
audio.volume = 0.2;
let theChosenOne = wordPicker();
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let pickedWord = theChosenOne.split("");
let currentWord = wordDisplay();
document.addEventListener("click", handleClick);
function display() {
  document.getElementById("word").innerHTML = currentWord.join("");
}
function wordPicker() {
  let number = Math.floor(Math.random() * wordList.length);
  return wordList[number];
}
display(wordDisplay());

function wordDisplay() {
  return pickedWord.map((char) => char.replace(/\S/g, "_"));
}
console.log({ pickedWord });
console.log({ currentWord });
function handleClick(event) {
  let clickedThingy = event.target.innerHTML.toLowerCase();
  if (event.target.classList.contains("letter")) {
    guessed.push(clickedThingy);
    if (pickedWord.includes(clickedThingy)) {
      currentWord = pickedWord.map((letter) => {
        return guessed.includes(letter) ? letter : " _ ";
      });
      display();
      if (currentWord.join("") === theChosenOne) {
        document.getElementById("text").innerHTML =
          "Congatulations! You've saved our pirate pal!";
      }
    } else {
      mistakes++;
      document.getElementById("pirate").src = "../assets/" + mistakes + ".jpeg";
      if (mistakes === maxWrong) {
        document.getElementById("text").innerHTML =
          "He's dead, the answer was " + theChosenOne;
      }
    }
  } else if (event.target.matches("button")) {
    document.getElementById("text").innerHTML =
      "Pick a letter, and try to save the poor lad.";
    mistakes = 0;
    guessed = [];
    theChosenOne = wordPicker();
    pickedWord = theChosenOne.split("");
    currentWord = wordDisplay();
    document.getElementById("pirate").src = "../assets/0.jpeg";
    display();
  }
}
