import React, { Component } from 'react';

import Menu from '../menu/Menu.js'

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    
                <Menu />
                    
                
                    <p> Questo è Home</p>

                
                    
                </header>
            </div>
        );
    }
}

export default Home;