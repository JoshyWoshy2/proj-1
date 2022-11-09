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
let theChosenOne = wordPicker();
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let pickedWord = theChosenOne.split("");
let currentWord = wordDisplay();
//EventListener
document.addEventListener("click", handleClick);
//137 words
function display() {
  document.getElementById("word").innerHTML = currentWord.join("");
}
function wordPicker() {
  let number = Math.floor(Math.random() * 137);
  return wordList[number];
}
display(wordDisplay());

function wordDisplay() {
  return pickedWord.map((char) => char.replace(/\S/g, "_"));
}
console.log({ pickedWord });
console.log({ currentWord });
function handleClick(event) {
  if (event.target.classList.contains("letter")) {
    guessed = event.target.innerHTML.toLowerCase();
    console.log(guessed);
    if (pickedWord.includes(guessed)) {
      //3 if matches character in answer
      ////1 show character location in word display
      letterIdx = pickedWord.indexOf(guessed);
      currentWord.splice(letterIdx, 1, guessed);
      display();
      ////2 check if word is complete
      if (currentWord.join("") === theChosenOne) {
        document.getElementById("text").innerHTML =
          "Congatulations! You've saved our pirate pal!";
      }
      //4 if no match
    } else if (pickedWord.indexOf(guessed) === -1) {
      ////1 mistakes++
      mistakes++;
      ////2 check if game lost
      if (mistakes === maxWrong) {
        document.getElementById("text").innerHTML =
          "He's dead, the answer was " + theChosenOne;
      }
      ////3 hang him a lil
    }
    //1 reset
  } else if (event.target.matches("button")) {
    mistakes = 0;
    guessed = [];
  }
}
