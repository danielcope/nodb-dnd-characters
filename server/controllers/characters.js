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

module.exports = {

  showChar: (req,res) => {
    res.status(200).send(characters);
  },

  addNewChar: (req,res) => { 
    const {userInput} = req.body
      
    userInput.id = id

    id++

    characters.push(userInput)
    res.status(200).send(characters)
  },

  editHp: (req,res) => {

    const {id} = req.params
    const {currentHp} = req.body
    console.log(currentHp);
  
    const character = characters.find(element => element.id === +id)
    character.currentHp = currentHp
    res.status(200).send(characters)
  },

  deleteChar: (req,res) => {
    const {id} = req.params;

    const index = characters.findIndex(ele =>
      ele.id === id);
    characters.splice(index, 1)
    res.status(200).send(characters)
  }


}