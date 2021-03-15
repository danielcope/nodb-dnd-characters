import React, { Component } from 'react'

class AddChar extends Component {
 

  render (){
    return(
    <section className="add-info">
      <h1>Add Your Character!</h1>
      <section>
        <div className="input-list">Name: <input className="name" onChange={(e)=>this.props.handleNameChange(e)}/></div>
        <div className="input-list">Race: <input className="race" onChange={(e)=>this.props.handleRaceChange(e)}/></div>
        <div className="input-list">Class: <input className="class" onChange={(e)=>this.props.handleClassChange(e)}/></div>
        <div className="input-list">Weapon: <input className="weapon" onChange={(e)=>this.props.handleWeaponChange(e)}/></div>
        <div className="input-list">Image: <input className="img-add" placeholder="Add image URL"  onChange={(e)=>this.props.handleImageChange(e)}/></div>
        <section className="ac-hp">
          <div className="input-list">AC: <input className="ac" onChange={(e)=>this.props.handleAcChange(e)}/></div>
          <div className="input-list">Max HP: <input className="maxhp" onChange={(e)=>this.props.handleMaxHpChange(e)}/></div>
        </section>
        <button className="submit-new" onClick={this.props.addChar}>Submit New Character</button>
      </section>
    </section>
    )
  }
}

export default AddChar