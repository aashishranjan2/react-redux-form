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
    render() {
        const isLoggedIn = false;
        // if (isLoggedIn) {
        //     <React.Fragment>
        //     <Login isLoggedIn />
        //     <SignUp isLoggedIn/>
        //     </React.Fragment>
        // }
        return(
            <div className="container">
                <div className="btn-placement">
                    {/* {!isLoggedIn ?  */}
                    { this.state.showHideButton ? 
                    <React.Fragment>
                    <button onClick={this.showLoginForm}> Login</button>
                    <button onClick={this.showSignupForm}> Sign up</button>
                    </React.Fragment>
                    : null}
                    {/* : ''} */}
                    {this.state.showLoginForm ? <Login /> : null}
                    {this.state.showSignUpForm ? <SignUp /> : null}
                </div>
            </div>
        );
    }
}