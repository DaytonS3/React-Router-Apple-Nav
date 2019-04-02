import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default function NavItem(props){
    
    return(
         <nav>
           <Link to='/device' className="A-tag"> <p>{props.name}</p> </Link> 
         </nav>
    )
}