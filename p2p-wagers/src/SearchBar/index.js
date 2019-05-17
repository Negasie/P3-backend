import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: ''
        }
    }
    handleChange = (e)=>{
        this.setState({
            searchTerm: e.target.value
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.getEvents(this.state.searchTerm);
        console.log(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default SearchBar;