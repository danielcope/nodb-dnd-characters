import React, { Component } from 'react'
import EditHp from './EditHp'

class CharList extends Component {
  constructor(){
    super();
  
  }

  render() {
  
  const mappedCharacters = this.props.characters.map((ele, i)=>(
  <main className="chars-with-image">
    <img src={ele.img}></img>
    <section className="individual-char-list" key={i}>
      <span className="char-name">Name: {ele.name}</span>
      <span className="char-race">Race: {ele.race}</span>
      <span className="char-class">Class: {ele.class}</span>
      <span className="char-weapon">Weapon: {ele.weapon}</span>
      <section className="char-ac-hp">
        <span className="char-ac">AC: {ele.ac}</span>
        <span className="char-hp">HP: {ele.currentHp}</span>
        <span className="char-maxHp">/ {ele.maxHp}</span>
      </section>    
    <button className="remove-char" onClick={() => this.props.deleteChar(this.props.characters.id)}>Remove</button>
    </section>
  </main>
  ))
  
    return (
      <div className="chars-list">
        {mappedCharacters}
        <EditHp />
      </div>
    )
  }
}

export default CharList