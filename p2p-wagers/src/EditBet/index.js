import React from 'react';


const EditBet = (props) =>  {

  return (
    <div>
      <h4> Edit Bet</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Change Your Game:
          <input type="text" name="game" onChange={props.handleFormChange} value={props.betToEdit.game}/>
        </label><br></br>
        <label>
          Change Your Action:
          <input type="text" name="action" onChange={props.handleFormChange} value={props.betToEdit.action}/>
        </label><br></br>
        <label>
          Change Your Odds:
          <input type="text" name="odds" onChange={props.handleFormChange} value={props.betToEdit.odds}/>
        </label>  <br></br>      
        <input type='Submit'/>
      </form>
    </div>

    )
  }


export default EditBet;


