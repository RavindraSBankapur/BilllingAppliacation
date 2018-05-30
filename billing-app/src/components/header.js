import React,{Component} from 'react';
import logo from './../logo.svg';
import './../App.css';


class Header extends Component{
    render(){
        return(
            <div>
            <header className="App-header">
                <h1 className="App-title">Welcome Billing Application</h1>
                <img src={logo} className="App-logo" alt="logo" />

            </header>
            </div>
        )
    }
}
export default Header;