import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import axios from 'axios';
import UploadScreen from './uploadscreen';

class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			emailId :'',
			password :''
		}
	}
	handleClick(event){
			var apiBaseUrl = "http://localhost:8080/ReviewAndRating/login/verify";
 			var self = this;
 			var payload={
				 "emailId":this.state.emailId,
				 "password":this.state.password
 				}
 				axios.post(apiBaseUrl+'login', payload).then(function(response){
 				console.log(response);
 				if(response.data.code === 200){
 					console.log('login successfull');
 					var uploadScreen = [];
 					uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
 					self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
 				}
 				else if (response.data.code === 204) {
 					console.log('emailId and password do not match');
 					alert('userName password do not match');
 				}
 				else{
 					console.log("Username does not exists");
					alert("Username does not exist");
				}
 			}).catch(function(error){
 				console.log(error);
 			});
	}
	render(){
		return(
			<div>
			<MuiThemeProvider>
				<div>
				<AppBar title="Login" />
				<TextField 
					hintText="Enter Your Email ID"
					floatingLabelText="emailId"
					onChange = {(event,newValue) => this.setState({emailId:newValue})}
				/>
				<br/>
				<TextField 
					hintText="Enter Your Password"
					floatingLabelText="password"
					onChange = {(event,newValue) => this.setState({password:newValue})}
				/>
				<br/>
				<RaisedButton 
					label="Submit" 
					primary={true}
					
					onClick={(event) => this.handleClick(event)}
				/>
				</div>
			</MuiThemeProvider>
			</div>
			
			);
	}
}
export default Login;
