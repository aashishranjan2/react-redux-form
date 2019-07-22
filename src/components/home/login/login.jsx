import React from 'react';
import { fetchUserDetails } from '../../../services/user-service';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn : false,
          formControls: {
            email: {
              value: ""
            },
            password: {
              value: ""
            },
          }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log('name = ' + name, 'value = ' + value)
      this.setState({
        formControls: {
          ...this.state.formControls,
          [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
      console.log("value", this.state);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const {email, password } = this.state.formControls;
        const body = {
           email: email.value,
           password: password.value
         };
        fetchUserDetails(body).then(response => {
          if (response.success) {
            this.setStateValue(response.success.isLoggedIn);
            // return window.location.href = '/profile'
          } else {
            this.setStateValue(false);
          } 
        });
        
      }
      setStateValue(isLoggedIn) {
        this.setState({
          isLoggedIn : isLoggedIn,
            formControls: {
              email: {
                value: ""
              },
              password: {
                value: ""
              },
            }
      });
      this.props.parentCallback(isLoggedIn);
      }

    render() {
        // const handleSubmit = this.props;
        return(
            <div className="form-container">
                <h2 className="main-txt">Login form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"
                        value={this.state.formControls.email.value} 
                        onChange={this.changeHandler}
                        className="form-control" placeholder="Enter your email id.."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password"
                        value={this.state.formControls.password.value} 
                        onChange={this.changeHandler}
                        className="form-control" placeholder="Enter your password.."></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}