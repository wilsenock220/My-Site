import './HeroSection2.css';

import React, { Component } from 'react';

class HeroSection2 extends Component {
    render(){
        return (
            <div className='heading'>
                <h1>{this.props.heading}</h1>
            </div>
        );
    }
}

export default HeroSection2