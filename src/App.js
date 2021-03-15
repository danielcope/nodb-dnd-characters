import React, { Component } from 'react'
import Header from './Components/Header'
import AddChar from './Components/AddChar'
import CharList from './Components/CharList'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      characters:[],
      userNameInput:'',
      userRaceInput:'',
      userClassInput:'',
      userAcInput:0,
      userWeaponInput:'',
      userMaxHpInput:0,
      userImageInput:'',
    }
    
    this.deleteChar = this.deleteChar.bind(this);
    this.addChar = this.addChar.bind(this)
 
  }



  componentDidMount (){
    axios.get('/api/characters')
      .then(res => {
        this.setState({ characters:res.data })
      })
      .catch(err => console.log(err))
    }

  handleNameChange = (e) => {
    this.setState({ userNameInput:e.target.value })
    console.log(this.state.userNameInput);
  }
  
  handleRaceChange = (e) => {
    this.setState({ userRaceInput:e.target.value })
  }
  
  handleClassChange = (e) => {
    this.setState({ userClassInput:e.target.value })
  }
  handleAcChange = (e) => {
    this.setState({ userAcInput:e.target.value })
  }
  
  handleWeaponChange = (e) => {
    this.setState({ userWeaponInput:e.target.value })
  }
  
  handleMaxHpChange = (e) => {
    this.setState({ userMaxHpInput:e.target.value })
  }
  
  handleImageChange = (e) => {
    this.setState({ userImageInput:e.target.value })
  }


addChar = () => {
  
  const userInput = {
    id:0,
    name:this.state.userNameInput,
    race:this.state.userRaceInput,
    class:this.state.userClassInput,
    ac:this.state.userAcInput,
    weapon:this.state.userWeaponInput,
    maxHp:this.state.userMaxHpInput,
    currentHp:this.state.userMaxHpInput,
    img:this.state.userImageInput
  }
  
  axios.post('/api/characters', { userInput })
  .then(res => {
    this.setState({ userInput:res.data })
    console.log(res)
  })
  .catch(err => console.log(err))

  this.componentDidMount()

}



  editHp = (id,currentHp) => {
    
    const newHp = {currentHp:currentHp}
      
    console.log(id);

    axios.put(`/api/characters/${id}`, newHp)
      .then((res) => {
        this.setState({ characters:res.data })
        // console.log(res);
      })
      .catch(err => console.log(err))
  }


  deleteChar (id) {
    axios.delete(`/api/characters/${id}`)
      .then(res => {
        this.setState({ characters:res.data })
      })
      .catch(err => console.log(err))
  }

  
  render(){ 
    return (
      <div>
        <header className="App">
          <Header/>
        </header>
        <main>
          <section className="char-list">
            <CharList 
            characters={this.state.characters} 
            deleteChar={this.deleteChar}
            editHp={this.editHp}
            />
          </section>
          <section className="add-menu">
            <AddChar 
            handleNameChange={this.handleNameChange} 
            handleRaceChange={this.handleRaceChange}
            handleClassChange={this.handleClassChange}
            handleAcChange={this.handleAcChange}
            handleWeaponChange={this.handleWeaponChange}
            handleMaxHpChange={this.handleMaxHpChange}
            handleImageChange={this.handleImageChange}
            addChar={this.addChar}
            />
          </section>
        </main>
      </div>
    );
  }

}
export default App;
