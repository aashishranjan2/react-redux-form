import React from 'react';

export class SignUp extends React.Component {
    handleSubmit() {

    }

    render() {
        // const { handleSubmit } = this.props;
        return(
            <div className="signup-container">
                <h2 className="main-txt">Sign up form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" className="form-control" placeholder="Enter your full name.."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="emal" className="form-control" placeholder="Enter your email id.."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter your password.."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword">Re-password*</label>
                        <input type="password" name="rePassword" className="form-control" placeholder="Enter your password again.."></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="mobile" name="mobile" className="form-control" placeholder="Enter your mobile number.."></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    
    }
}