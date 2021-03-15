import React, { Component } from 'react'
import EditHp from './EditHp'

class CharList extends Component {
  constructor(){
    super();
    this.state = {
      isEditing:false,
      currentHp:0
    }

  //   handleHpChange = (e) => {
  //     this.setState({ currentHp:e.target.value })
  //   }

  //   handleToggle = () => {
  //     this.setState({ isEditing: !this.state.isEditing })
  //   }

  //   handleEdit = (id) => {
  //     this.props.editHp(id, this.state.currentHp);
  //     this.handleToggle();
  // }


  }
  render() {
  
  const mappedCharacters = this.props.characters.map((ele, i)=>(
  <main className="chars-with-image" key={ele.id}>
    <img src={ele.img} alt={ele.name} ></img>
    <section className="individual-char-list" key={i}>
      <span className="char-name" >Name: {ele.name}</span>
      <span className="char-race" >Race: {ele.race}</span>
      <span className="char-class" >Class: {ele.class}</span>
      <span className="char-weapon" >Weapon: {ele.weapon}</span>
      <section className="char-ac-hp">
        <span className="char-ac" >AC: {ele.ac}</span>
        <span className="char-hp-section">HP:</span>
        <input className="char-hp" placeholder={ele.currentHp} onChange={this.handleHpChange}></input>
        <span className="char-maxHp" >/ {ele.maxHp}</span>
        <button className="hp-submit" editHp={(e) => this.props.editHp(ele.id,e.target.value)}>New HP</button>
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