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
      userInput:''
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

  handleChange () {

  }

  addChar () {
    axios.post('/api/character')
      .then(res => {
        this.setState({ characters:res.data })
      })
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
            <AddChar />
          </section>
        </main>
      </body>
    );
  }

}
export default App;
