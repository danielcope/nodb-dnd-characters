import React, { Component } from 'react'

class CharList extends Component {
  constructor(){
    super();
    this.state = {
      currentHp:0
    }
  }

  handleHpChange = (e) => {
    this.setState({ currentHp:e.target.value })
    console.log(this.state.currentHp);
  }

  handleEdit = (id) => {
    this.props.editHp(id, this.state.currentHp);
  }

  render() {
  
  const mappedCharacters = this.props.characters.map((ele, i)=>(
  <main className="chars-with-image" key={ele.id}>
    <img src={ele.img} alt={ele.name} className="char-img"></img>
    <section className="individual-char-list" key={i}>
      <span className="char-name" >Name: {ele.name}</span>
      <span className="char-race" >Race: {ele.race}</span>
      <span className="char-class" >Class: {ele.class}</span>
      <span className="char-weapon" >Weapon: {ele.weapon}</span>
      <span className="char-ac" >AC: {ele.ac}</span>
    <button className="remove-char" onClick={() => this.props.deleteChar(this.props.characters.id)}>Remove</button>
    </section>
    <div className="char-ac-hp">
      <div className="char-hp-section">
      <span>HP:</span>
      <input className="char-hp" placeholder={ele.currentHp} onChange={this.handleHpChange}></input>
      <span className="char-maxHp">/{ele.maxHp}</span>
      </div>
    <button className="hp-submit" onClick={() => this.handleEdit(ele.id)}>Submit New HP</button>
    </div>    
  </main>
  ))
  
    return (
      <div className="chars-list">
        {mappedCharacters}
      </div>
    )
  }
}

export default CharList