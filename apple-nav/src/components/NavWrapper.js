import React from 'react';
import '../App.css'
import DummyData from './DummyData';
import NavItem from './NavItem';


class NavWrapper extends React.Component {
    constructor(){
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: DummyData
        })
    }



    render() {
        
      return (
        <div className="Nav-Items">
            {this.state.data.map(item => (
                <NavItem key={item.name} name={item.name} 
                />
                
        ))}
        </div>
      );
    }
  }
  
  export default NavWrapper;
  