import React, { Component } from 'react';
import Contain from '../Contain';
import Logo from '../Logo';

class Body extends Component 
{  
  render() {
    return (
        <div>
            
            <Logo />
            <Contain />
        </div>
    );
  }
}

export default Body;
