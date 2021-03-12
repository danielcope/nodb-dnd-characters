import React, { Component } from 'react'

class AddChar extends Component {
  constructor (){
    super();
}



  render (){
    return(
    <section className="add-info">
      <h1>Add You Character!</h1>
      <section>
        <div className="input-list">Name: <input className="name"/></div>
        <div className="input-list">Race: <input className="race"/></div>
        <div className="input-list">Class: <input className="class"/></div>
        <div className="input-list">Weapon: <input className="weapon"/></div>
        <div className="input-list">Image: <input className="img-add" placeholder="add image URL" /></div>
        <section className="ac-hp">
          <div className="input-list">AC: <input className="ac"/></div>
          <div className="input-list">Max HP: <input className="maxhp"/></div>
        </section>
        <button className="submit-new">Submit New Character</button>
      </section>
    </section>
    )
  }
}

export default AddChar