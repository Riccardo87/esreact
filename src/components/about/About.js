import React, { Component } from 'react';

import '../.././css/App.css';

class About extends Component {

    constructor(props) {
        super(props);
    }
        render() {
            return (
                <div className="App">
                    <header className="App-header">
                    <p> Questo è about</p>

                    </header>
                </div>
            );
        }
    }

export default About;