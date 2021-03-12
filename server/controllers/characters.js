const { default: axios } = require("axios");

const characters = [{
  "id":0,
  "name":"tommy b barleybuck",
  "race":"halfling",
  "class":"cleric",
  "ac":12,
  "weapon":"dagger",
  "maxHp":40,
  "currentHp":40,
  "img":'https://png.pngitem.com/pimgs/s/177-1775445_girkip-the-imp-bard-gnome-hobbit-halfling-song.png'
}

];

let id = 1;

// showChars,addChar,editHp,deleteChar
module.exports = {

  showChar: (req,res) => {
    res.status(200).send(characters);
  },

  addChar: (req,res) => { 
    const {name,race,charClass,ac,weapon,maxHp} = req.body
        
    const newCharacter = {
      "id":id,
      "name":name,
      "race":race,
      "class":charClass,
      "ac":ac,
      "weapon":weapon,
      "weapon":maxHp
    }

    id++

    characters.push(newCharacter)
    res.status(200).send(characters)
  },

  editHp: (req,res) => {

  },

  deleteChar: (req,res) => {
    const {id} = req.params;

    const index = characters.findIndex(ele =>
      ele.id === id);
    characters.splice(index, 1)
    res.status(200).send(characters)
  }


}