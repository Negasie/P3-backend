import React, { Component } from 'react';
import EventsContainer from '../EventsContainer';
import Dropdown from '../Dropdown';
class CreateBet extends Component {

  constructor(){
    super();

    this.state = {
      game: '',
      action: '',
      odds: ''
    }
  }
  updateBet = (e) => {
    // Computed Properties
    console.log(e.currentTarget.value);
    console.log(this.state, "##############");
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    // first argument on .bind is always the context of this
    return (

      <form onSubmit={this.props.addBet.bind(null, this.state)}>
        <label>
          Game:
          <Dropdown  name="game" updateBet={this.updateBet}/>
        </label><br></br>
        <label>
          Action:
          <input type="text" name="action" onChange={this.updateBet}/>
        </label><br></br>
         <label>
          Odds:
          <input type="text" name="odds" onChange={this.updateBet}/>
        </label><br></br>
        <input type='Submit'/>
      </form>
      )
  }
}

export default CreateBet;