import React, { Component } from 'react'
import Header from './Components/Header'
import AddChar from './Components/AddChar'
import CharList from './Components/CharList'
import axios from 'axios'


import './App.css';
import characters from '../server/controllers/characters'

class App extends Component {
  constructor(){
    super();
    this.state = {
      characters:[],
      userInput: {
        name:'',
        race:'',
        class:'',
        ac:0,
        Weapon:'',
        Image:'',
        MaxHp:0
      },
      userNameInput:'',
      userRaceInput:'',
      userClassInput:'',
      userAcInput:'',
      userWeaponInput:'',
      userMaxHpInput:'',
      userImageInput:''
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
    console.log(this.state.userRaceInput);
  }
  
  handleClassChange = (e) => {
    this.setState({ userClassInput:e.target.value })
    console.log(this.state.userClassInput);
  }
  handleAcChange = (e) => {
    this.setState({ userAcInput:e.target.value })
    console.log(this.state.userAcInput);
  }
  
  handleWeaponChange = (e) => {
    this.setState({ userWeaponInput:e.target.value })
    console.log(this.state.userWeaponInput);
  }
  
  handleMaxHpChange = (e) => {
    this.setState({ userMaxHpInput:e.target.value })
    console.log(this.state.userMaxHpInput);
  }
  
  handleImageChange = (e) => {
    this.setState({ userImageInput:e.target.value })
    console.log(this.state.userImageInput);
  }

  submitChar = () => {
    this.setState({ userInput: {
      name:this.state.userNameInput,
      race:this.state.userRaceInput,
      class:this.state.userClassInput,
      ac:this.state.userAcInput,
      weapon:this.state.userWeaponInput,
      Image:this.state.userImageInput,
      MaxHp:this.state.userMaxHpInput
    }
    })
    this.addChar()
    console.log(this.state.userInput);
  }
  

  addChar = event => {
    event.preventDefault();

    axios.post('/api/characters', { userInput })
      .then(res => {
        // this.setState({ userInput:res.data })
        console.log(res);
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
      <body>
        <header className="App">
          <Header/>
        </header>
        <main>
          <section className="char-list">
            <CharList characters={this.state.characters} deleteChar={this.deleteChar}/>
          </section>
          <section className="add-menu">
            <AddChar 
            submitChar={this.submitChar}
            handleNameChange={this.handleNameChange} 
            handleRaceChange={this.handleRaceChange}
            handleClassChange={this.handleClassChange}
            handleAcChange={this.handleAcChange}
            handleWeaponChange={this.handleWeaponChange}
            handleMaxHpChange={this.handleMaxHpChange}
            handleImageChange={this.handleImageChange}
            />
          </section>
        </main>
      </body>
    );
  }

}
export default App;
