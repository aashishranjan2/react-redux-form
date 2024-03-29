import React from 'react';
import { postUserDetails } from '../../../services/user-service';

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formControls: {
            fullName: {
              value: ""
            },
            email: {
              value: ""
            },
            password: {
              value: ""
            },
            rePassword: {
              value: ""
            },
            mobile: {
              value: ""
            }
          }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
      this.setState({
        formControls: {
          ...this.state.formControls,
          [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const {fullName, email, password, rePassword, mobile } = this.state.formControls;
        const body = {
           fullName: fullName.value,
           email: email.value,
           password: password.value,
           rePassword: rePassword.value,
           mobile: mobile.value
         };
        postUserDetails(body).then(response => {
          if (response.success) return this.setStateValue();
          console.log(response.error)
        });
      }
      setStateValue() {
        this.setState({
            formControls: {
              fullName: {
                value: ""
              },
              email: {
                value: ""
              },
              password: {
                value: ""
              },
              rePassword: {
                value: ""
              },
              mobile: {
                value: ""
              }
            }
      });
      }

    render() {
        return(
            <div className="form-container">
                <h2>Sign up form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" 
                        value={this.state.formControls.fullName.value} 
                        onChange={this.changeHandler}
                        className="form-control" placeholder="Enter your full name.."></input>
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="rePassword">Re-password*</label>
                        <input type="password" name="rePassword"
                        value={this.state.formControls.rePassword.value} 
                        onChange={this.changeHandler}
                        className="form-control" placeholder="Enter your password again.."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" name="mobile"
                        value={this.state.formControls.mobile.value} 
                        onChange={this.changeHandler}
                        className="form-control" placeholder="Enter your mobile number.."></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    
    }
}
