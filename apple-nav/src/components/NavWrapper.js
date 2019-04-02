import React from 'react';
import '../App.css'
import DummyData from './DummyData';

class NavWrapper extends React.Component {
    constructor(){
        super();

        this.State = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: DummyData
        })
    }



    render() {
        console.log(this.state);
      return (
        <div className="App">
            <p>Hi</p>
        </div>
      );
    }
  }
  
  export default NavWrapper;
  