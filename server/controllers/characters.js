const characters = [{
  "id":0,
  "name":"tommy b barleybuck",
  "race":"halfling",
  "class":"cleric",
  "ac":12,
  "weapon":"dagger",
  "maxHp":40,
  "currentHp":40,
  "img":"https://i.pinimg.com/236x/63/f7/de/63f7dec39b115c07c83f75671b84cfcb--fantasy-characters-gnome-bard.jpg"
}];

let id = 1;

// showChars,addChar,editHp,deleteChar
module.exports = {

  showChar: () => {
    resizeBy.status(200).send(characters);
  }
}