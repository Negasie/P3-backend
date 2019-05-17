import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import EventsContainer from '../EventsContainer';
import BetContainer from '../BetContainer';


class MainContainer extends Component{
    constructor(){
        super();
        this.state = {
            events: []
        }
    }
    getEvents = async (searchTerm)=>{
        try{
            console.log('Getting events');
            const apiResponse = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4424`);
            if(!apiResponse.ok){
                throw Error(apiResponse.statusText);
            }
            const parsed = await apiResponse.json();
                        console.log(parsed);
            this.setState({
                events: parsed.events
            });
            console.log(this.state.events);
        }catch(err){
            console.log(err);
            return err;
        }

    }
    render(){
        console.log(this.state);
        return(
            <div className="App-header" id="sports-index">
            <br></br>
              Search for a Game Here:    <SearchBar getEvents={this.getEvents}/>
             
              <EventsContainer eventList={this.state.events}/>
                         <br></br>
                         <BetContainer eventList={this.state.events} />


            </div>
        )
    }


}





export default MainContainer;