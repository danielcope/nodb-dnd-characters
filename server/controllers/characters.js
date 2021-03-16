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
},
{
  "id":1,
  "name":"legolas",
  "race":"elf",
  "class":"fighter",
  "ac":17,
  "weapon":"bow",
  "maxHp":120,
  "currentHp":120,
  "img":'https://cdn.staticneo.com/w/lotr/thumb/Legolas_logo.jpg/250px-Legolas_logo.jpg'
},
{
  "id":2,
  "name":"gimli",
  "race":"dwarf",
  "class":"fighter",
  "ac":21,
  "weapon":"axe",
  "maxHp":200,
  "currentHp":200,
  "img":'https://i.pinimg.com/originals/55/65/08/55650830838fe28ec5900478647bbb29.jpg'
}

];

let id = 3;

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

    const index = characters.findIndex(element =>
      element.id === +id);
    characters.splice(index, 1)
    res.status(200).send(characters)
  }


}