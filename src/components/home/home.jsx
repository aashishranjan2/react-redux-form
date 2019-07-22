import React from 'react';
import { SignUp } from './sign-up/sign-up';
import { Login } from './login/login';
import { Link } from "react-router-dom";
export class HomeComponent extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
        isLoggedIn: false,
        showHideButton: true,
        showSignUpForm: false,
        showLoginForm: false
       }
       this.showSignupForm = this.showSignupForm.bind(this);
       this.showLoginForm = this.showLoginForm.bind(this);
   }

   showSignupForm() {
    console.log('sign up')
    this.setState({showSignUpForm: true, showLoginForm: false, showHideButton: false});
       
   }
   showLoginForm() {
    console.log('login')
       this.setState({showLoginForm: true, showSignUpForm: false, showHideButton: false})
   }
   callbackFunction = (childData) => {
    this.setState({isLoggedIn: childData});
    this.props.parentCallback(this.state.isLoggedIn);
}
    render() {
        const isLoggedIn = false;
        return(
            <div className="container">
                <div >
                    {/* {!isLoggedIn ? */}
                    { this.state.showHideButton ? 
                    <React.Fragment>
                    <button className="btn-placement" onClick={this.showLoginForm}> Login</button>
                    <button onClick={this.showSignupForm}> Sign up</button>
                    </React.Fragment>
                    : null}
                    {/* : ''} */}
                    {this.state.showLoginForm ? <Login parentCallback = {this.callbackFunction}/> : null}
                    {this.state.showSignUpForm ? <SignUp /> : null}
                    
                </div>
            </div>
        );
    }
}