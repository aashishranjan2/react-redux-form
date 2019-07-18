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
        const {fullName, email, password, rePassword, mobile } = this.state.formControls;
        const body = {
           fullName: fullName.value,
           email: email.value,
           password: password.value,
           rePassword: rePassword.value,
           mobile: mobile.value
         };
     
       
        console.log('state', this.state.formControls)
        postUserDetails(body).then(data => {
          console.log("details added");
          alert("Details are added successfully!!");
          this.setStateValue();
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
        // const { handleSubmit } = this.props;
        return(
            <div className="signup-container">
                <h2 className="main-txt">Sign up form</h2>
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
                        <input type="number" name="mobile"
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