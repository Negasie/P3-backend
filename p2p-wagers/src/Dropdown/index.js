import React from 'react';

class DropDown extends React.Component {
    constructor() {
        super();

        this.state = {
            values: []
        }
    }
    
    componentDidMount() {
        let json = null;
       fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4424')
        .then((res) => {
            return res.json();
            // console.log(123, res);
            // console.log('help', res.json());
            // console.log(456, json);
        }).then((response) => {
            console.log('help', response);
            this.setState({values: response.events});
        })
    }
    render(){
        return <div className="drop-down">
              <select name="game" onChange={this.props.updateBet}>{
                 this.state.values.map((obj) => {
                     return <option value={obj.strEvent}>{obj.strEvent}</option>
                 })
              }</select>
            </div>;
    }
}

export default DropDown;