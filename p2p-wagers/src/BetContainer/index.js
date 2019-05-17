import React, { Component } from 'react';
import CreateBet from '../CreateBet';
import BetList from '../BetList';
import EditBet from '../EditBet';

class BetContainer extends Component {
	constructor(){
		super();

		this.state = {
			bets: [],
			betToEdit: {
				_id: null,
				game: '',
				action: '',
				odds: ''
			},

		}
	}
	componentDidMount(){
		this.getBets();
	};
	getBets = async () => {
		try{
			const response = await fetch('http://localhost:9000/bets');
			if(response.status !== 200){
				throw Error(response.statusText);
			}
			const betsParsed = await response.json();
			this.setState({bets: betsParsed.data})
		}	catch(err){}
	}

	addBet = async (bet, e) =>{
		e.preventDefault();
		console.log(bet);

	try {
		const createdBet = await fetch('http://localhost:9000/bets', {
			method: 'POST',
			body: JSON.stringify(bet),
			headers: {
				'Content-type': 'application/json'
			}
		});
		const parsedResponse = await createdBet.json();
		this.setState({
			bets: [...this.state.bets, parsedResponse.data]})
		console.log(parsedResponse.data);

	} catch(err){
		console.log(err)
	}
	}






closeAndEdit = async (e) =>{
		e.preventDefault();

		try {

      const editResponse = await fetch('http://localhost:9000/bets/' + this.state.betToEdit._id, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.betToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      })


      const parsedResponse = await editResponse.json();


      const editedBetArray = this.state.bets.map((bet) => {
        if(bet._id === this.state.betToEdit._id){
            bet = parsedResponse.data;
        }
        return bet
      });
      this.setState({
        bets: editedBetArray,
        modalShowing: false
      });

    }catch(err){
      console.log(err);
    }
  }
  handleFormChange = (e) => {
    this.setState({
      betToEdit: {
        ...this.state.betToEdit,
        [e.target.name]: e.target.value
      }
    })
  }
  showModal = (bet) => {
    console.log(bet, '<-- in showModal')
    this.setState({
      modalShowing: true,
      betToEdit: bet
    });
  }









	deleteBet = async (id, e) =>{
		console.log(id, 'this is id');
		e.preventDefault();
		try {
			const deleteBet = await fetch('http://localhost:9000/bets/' +id, {
				method: 'DELETE'
			});
			console.log('trying to delete');
			const deleteBetJson = await deleteBet.json();
			this.setState({bets: this.state.bets.filter((bet, i)=> bet._id !== id)});

		} catch(err) {
			console.log(err);
		}
	}
  render(){
    console.log(this.state, "<---- state object")
    return (
      <div>
        <CreateBet addBet={this.addBet} />
        <BetList bets={this.state.bets} showModal={this.showModal} deleteBet={this.deleteBet}/>
        {this.state.modalShowing ? <EditBet betToEdit={this.state.betToEdit} closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange}/> : null}
      </div>
      )
  }	


}






export default BetContainer;


