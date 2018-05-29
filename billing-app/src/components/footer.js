import React, { Component } from 'react';
import download from './../download.png';
import './../App.css';

class Footer extends Component {
    render() {
        return (
            <div className="App">
                <footer className="App-footer">
                    <h1 className="App-title">Thank you for Using!</h1>
                    <img src={download} className="App-logo-footer" alt="logo" />
                </footer>
            </div>
        );
    }
}

export default Footer;
