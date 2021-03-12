import React, { Component } from 'react'
import Header from './Components/Header'
import EditHp from './Components/EditHp'
import AddChar from './Components/AddChar'
import CharList from './Components/CharList'
// import axios from 'axios'


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      characters:[]
    }
  }


  componentDidMount (){

  }


  render(){ 
    return (
      <body>
        <header className="App">
          <Header/>
        </header>
        <main>
          <section className="char-list">
            <CharList />
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
