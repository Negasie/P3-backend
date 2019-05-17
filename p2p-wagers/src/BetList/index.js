import React from 'react';



const Bets = (props) => {

  const BetList = props.bets.map((bet) => {
    return (
      <li key={bet._id}>
        <span>For This Game: {bet.game}</span> <br></br>
        <span>I'll bet that the {bet.action}</span><br></br>
        <span>For {bet.odds} odds.</span><br></br>
        <button onClick={props.deleteBet.bind(null, bet._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, bet)}>Edit</button>
        <button>Accept Bet!</button>
      </li>

      )
  })
console.log(BetList);

  return (
    <ul>
      {BetList}
    </ul>
    )

}





export default Bets;